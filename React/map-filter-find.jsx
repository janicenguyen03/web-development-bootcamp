var numbers = [3, 56, 2, 48, 5];

//Map - Create a new array by doing something with each item in an array.
function double(x) {
    return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

// const newNumbers = numbers.map(function (x) {
//     return x * 2;
// });

var forNumbers = [];
numbers.forEach(function (x) {
    forNumbers.push(x*2);
});
console.log(forNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function (num) {
    return num > 10
});

console.log(filterNumbers);

forNumbers = [];
numbers.forEach(function (num) {
    if (num < 10) forNumbers.push(num);
})

console.log(forNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// accumulator: previous variable
var reduceNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
});

console.log(reduceNumber);

forNumbers = 0;
numbers.forEach(function (currentNumber) {
    forNumbers += currentNumber;
})

console.log(reduceNumber);

//Find - find the first item that matches from an array.
const findNumber = numbers.find(function (num) {
    return num > 10;
})

console.log(findNumber);

//FindIndex - find the index of the first item that matches.
const findIndex = numbers.findIndex(function (num) {
    return num > 10;
})

console.log(findIndex);