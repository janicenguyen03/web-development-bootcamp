import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 0,
});

db.connect();

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  const all_visited = result.rows;
  let countries = [];
  all_visited.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// GET home page
app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisited();
  res.render("index.ejs", {
    total: countries.length,
    countries: countries
  })
});

app.post("/add", async (req, res) => {
  let name = req.body.country.trim().toLowerCase();

  try {
    const result = await db.query(
      "SELECT country_code FROM countries\
      WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [name]
    );

    const data = result.rows[0];
    const country_code = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [country_code]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {
        total: countries.length,
        countries: countries,
        error: "Country has already been added, try again."
    })
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", {
      total: countries.length,
      countries: countries,
      error: "Country name does not exist, try again."
    })
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
