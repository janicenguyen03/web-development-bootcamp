const buttons = document.querySelectorAll(".drum");

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // this: identity of the button that triggers the event listener
        console.log(this.innerHTML);
        this.style.color="white";
        var audio = new Audio('sounds/' + this.innerHTML + '.mp3');
        audio.play();
    });
}

/* use anonymous function
document.querySelector("button").addEventListener("click", function ()) {
    alert("I got clicked!");
    // what to do when click detected
} */