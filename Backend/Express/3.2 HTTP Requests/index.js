import express from "express";
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send(
        "<h1>About Me</h1>\
        <p>I'm a rising Senior at UCI double majoring in Business Admin and Informatics</p>"
    );
});

app.get("/contact", (req, res) => {
    res.send(
        "<h1>My Contact</h1>\
        <p>Email: haiduyendn161214@gmail.com</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})