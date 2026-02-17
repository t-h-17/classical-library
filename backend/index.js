const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

//get all texts
app.get("/texts", (req, res) => {
  db.all("SELECT * FROM texts", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

//set reading status
app.post("/texts/:id/status", (req, res) => {
  const { status } = req.body;
  const textId = req.params.id;
  db.run(
    `
    INSERT INTO text_status (text_id, status)
    VALUES (?, ?)
    ON CONFLICT(text_id)
    DO UPDATE SET status = excluded.status
    `,
    [textId, status],
    err => {
      if (err) return res.status(500).json(err);
      res.json({ success: true });
    }
  );
});

//get library with optional status filter
app.get("/library", (req, res) => {
  const { status, search, sort, direction } = req.query;

  let query = `
    SELECT texts.*, text_status.status
    FROM texts
  `;

  const conditions = [];
  const params = [];

  //have to specify INNER JOIN to prevent all texts from appearing in the search when there is a status selected
  if (status) {
    query += `
      INNER JOIN text_status
      ON texts.id = text_status.text_id
    `;
    conditions.push("text_status.status = ?");
    params.push(status);
  } else {
    //LEFT JOIN still here so that the two tables can join even when some texts have null status
    query += `
      LEFT JOIN text_status
      ON texts.id = text_status.text_id
    `;
  }

  //allows the search to look through all fields, case-insensitively
  if (search) {
    conditions.push(`
      LOWER(texts.author) LIKE ?
      OR LOWER (texts.city) LIKE ?
      OR LOWER (texts.country) LIKE ?
      OR LOWER (texts.title) LIKE ?
      OR LOWER (texts.date) LIKE ?
    `);
    
    const term = `%${search.toLowerCase()}%`;
    params.push(term, term, term, term, term);
  }

  //dynamically builds the WHERE clause based on filter and/or search
  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  //sorts by author, date, or title in either ascending or descending order, defaults to author ASC
  query += ` ORDER BY texts.${sort} ${direction.toUpperCase()}`;

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

//check that server runs
app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
