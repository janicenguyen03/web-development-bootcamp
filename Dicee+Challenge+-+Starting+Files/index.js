const navEntries = performance.getEntriesByType("navigation");
const navType = navEntries.length > 0 ? navEntries[0].type : "";

if (navType === "reload") {
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    function diceRoll(player, score) {
        document.querySelector(player).setAttribute("src", "./images/dice" + score + ".png");
    }

    diceRoll(".img1", dice1);
    diceRoll(".img2", dice2);

    var result = "";
    if (dice1 > dice2) {
        result = "Player 1 Wins! 🚩";
    } else if (dice2 > dice1) {
        result = "Player 2 Wins! 🚩";
    } else {
        result = "Draw!";
    }

    document.querySelector("h1").innerHTML = result;
}