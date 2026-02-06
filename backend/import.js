/*this is a script used to import a .csv file full of
author/text data into SQL for my database. The csv
is from https://github.com/scaife-viewer/scaife-viewer */

const fs = require("fs");
const { parse } = require("csv-parse/sync");
const db = require("./db");
const path = require("path");

const csvData = fs.readFileSync("library_metadata.csv", "utf8");

const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

//the csv file has location as "city, country" or as "country", must be parsed for SQL
function parseLocation(location) {
  const arr = location.split(",").map(s => s.trim());
  return (arr[1] == null) ? { city: null, country: arr[0] } : { city: arr[0], country: arr[1] };
}

//the csv file has date ranges like "450 BCE - 400 BCE" or "200 CE", must be parsed for SQL
function parseDate(dateRange) {
  if (!dateRange) return null;

  //look for a year + era (BCE or CE)
  const match = dateRange.match(/(\d+)\s(BCE|CE)/i);
  if (!match) return null;

  //convert year into Integer, mark BCE years as negative for easier sorting in SQL
  let year = parseInt(match[1], 10);
  const era = match[2];
  if (era === "BCE") {
    year = -year;
  }
  
  return year;
}


db.serialize(() => {
  const stmt = db.prepare(`
    INSERT INTO texts (author, city, country, title, date)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const row of records) {
    const { city, country } = parseLocation(row["Geographic Location"]);
    const date = parseDate(row["Date Range of Work"]);

    stmt.run(
      row["Author"],
      city,
      country,
      row["Work Title"],
      date
    );
  }

  stmt.finalize();
});
