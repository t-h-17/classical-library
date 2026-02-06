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
  const { status } = req.query;

  let query = `
    SELECT texts.*, text_status.status
    FROM texts
    LEFT JOIN text_status ON texts.id = text_status.text_id
  `;

  const params = [];

  if (status) {
    query += " WHERE text_status.status = ?";
    params.push(status);
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

//check that server runs
app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
