const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./library.db");

//create SQL tables for the database using the parameters I want in the library
db.serialize(() => {
    //texts table
    db.run(`
    CREATE TABLE IF NOT EXISTS texts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT,
      city TEXT,
      country TEXT NOT NULL,
      title TEXT NOT NULL,
      date INTEGER
    )
  `);

  //text status table
  db.run(`
    CREATE TABLE IF NOT EXISTS text_status (
      text_id INTEGER PRIMARY KEY,
      status TEXT CHECK(status IN ('read', 'reading', 'want'))
    )
  `);
});

module.exports = db;