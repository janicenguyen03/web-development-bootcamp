import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;

const db = new pg.Client({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 0,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

let users = [
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

async function checkVisisted(currentUserID) {
  console.log(currentUserID + " 1");
  const result = await db.query(
    "SELECT country_code FROM visited_countries\
    WHERE user_id = $1", [currentUserID]
  );

  console.log(result.rows);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(countries);
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted(currentUserId);
  try {
    const result = await db.query("SELECT * FROM users");
    users = result.rows;
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: users[currentUserId-1].color,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries\
      WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id)\
        VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/user", async (req, res) => {
  if (req.body.add) {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  try {
    const result = db.query(
      "INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *",
      [req.body.name, req.body.color]
    )
    currentUserId = result.rows[0].id - 1;
    res.redirect("/")
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
