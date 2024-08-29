
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0

startOver();

function startOver() {
    var keyPressed = false;
    $(document).keypress(function() {
        if (!keyPressed) {
            gamePattern = [];
            level = 0;
            keyPressed = true;
            nextSequence();
        }
    })
}

function playSound(name) {
    var sound = new Audio('sounds/'+ name +'.mp3');
    sound.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").fadeIn(200).text("Level "+ level);
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log()
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").click(function(event) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel) {
    var gameLen = gamePattern.length;
    if (gameLen > 0 && userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("success");
        if (currentLevel === level - 1) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}