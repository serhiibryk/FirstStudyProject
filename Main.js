"use strict";
//first lesson
/* const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('One of the last watched films?', ''),
  b = prompt('What is your score?', ''),
  c = prompt('One of the last watched films?', ''),
  d = prompt('What is your score?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/
//second lesson  terms
/*if (4 == 9) {
  console.log("Ok!");
} else {
  console.log("Error");
}

const num = 59;

if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Many");
} else {
  console.log("Ok!!");
} 

// const num = 50;
// num === 50 ? console.log("Ok!") : console.log("error");

const num = 50;

switch (num) {
  case 49:
    console.log("No!");
    break;
  case 100:
    console.log("No!");
    break;
  case 50:
    console.log("Yeah");
    break;
  default:
    console.log("Not this time");
    break;
} */

//lesson 3 cycles(3 types)

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num <55);

// let num = 50;

// for (let i = 1; i < 8; i++) {
//   if (i === 6) {
//     //break;
//     continue;
//   }
//   console.log(i);
// }

//lesson 4  practice  (if, if-else, for)
/*
let numberOfFilms = +prompt("How many films have you watched?", "");

if (numberOfFilms == "") {
}
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("One of the last watched films?", ""),
    b = prompt("What is your score?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("A little ");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("man");
} else if (personalMovieDB.count >= 30) {
  console.log("woow");
} else {
  console.log("Error");
}
console.log(personalMovieDB);
*/

//lesson 5,6,7  functions
/*
let numberOfFilms;
function start() {
  numberOfFilms = +prompt("How many films have you watched?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you watched?", "");
  }
}

start();

if (numberOfFilms == "") {
}
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("One of the last watched films?", ""),
      b = prompt("What is your score?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("A little ");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("man");
  } else if (personalMovieDB.count >= 30) {
    console.log("woow");
  } else {
    console.log("Error");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favourite gener ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();

// console.log(personalMovieDB);
*/

//lesson 8  callback in functions

// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }

// learnJS("JavaScript", function () {
//   console.log("I passed this lesson!");
// });

//lesson 9 objects and destructurization

/* const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);          */

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Option ${i} has value ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Option ${key} has value ${options[key]}`);
//   }
// }
// console.log(counter);

// lesson 10 arrays and pseudo-arrays

// const arr = [2, 28, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside the array ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(arr);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join("; "));
