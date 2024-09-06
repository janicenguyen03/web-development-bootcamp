import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let daysOTW = "";
    let message = "";
    let titleHTML = "";
    if ( day <= 5 && day >= 1) {
        titleHTML = "Weekday";
        daysOTW = "a weekday";
        message = "work hard";
    } else {
        titleHTML = "Weekend";
        daysOTW = "the weekend";
        message = "have fun";
    }
    res.render("index.ejs", {
        title: titleHTML,
        date : daysOTW,
        advice: message
    });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});