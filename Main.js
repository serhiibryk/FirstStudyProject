const numberOfFilms = +prompt('How many films have you watched?', '');

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
