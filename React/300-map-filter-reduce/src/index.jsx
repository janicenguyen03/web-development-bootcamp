import emojipedia from "./emojipedia";

// substring
const result = emojipedia.map(function (emoji) {
    return emoji.meaning.substring(0, 100);
});

console.log(result);