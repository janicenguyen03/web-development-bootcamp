const buttons = document.querySelectorAll(".drum");

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
    alert("I got clicked!");
}

/* use anonymous function
document.querySelector("button").addEventListener("click", function ()) {
    alert("I got clicked!");

    // what to do when click detected
} */