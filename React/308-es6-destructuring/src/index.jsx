// CHALLENGE: uncomment the code below and see the car stats rendered
// import animals, {useAnimals} from "./data";

// const [cat, dog] = animals;
// const { name, sound } = cat;

// const {name: catName, sound: catSound} = cat;

// if name is undefined, then use Fluffy - default value
// const { name = "Fluffy", sound = "Purr"} = cat;

// const {name, sound, feedingRequirements: {food, water}} = cat;

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root")
);
