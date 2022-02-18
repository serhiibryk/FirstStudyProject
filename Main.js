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
//second lesson
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

//lesson 3

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

//lesson 4
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

//lesson 5,6,7

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
