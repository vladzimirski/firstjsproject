"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
	if (numberOfFilms == '' || numberOfFilms == null || isNaN()) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
	};
};

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyfilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Последний просмотренный фильм?", "".trim()),
			b = +prompt("Ваша оценка", "");
		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			console.log("done")
			personalMovieDB.movies[a] = b;
		} else {
			console.log("error")
			i--;
		}

	};
};

rememberMyfilms();

function detectPersonalLevel() {
	if (personalMovieDB.count >= 30) {
		alert("Вы киноман!")
	} else if (personalMovieDB.count >= 10) {
		alert("Вы классичсекий зритель!")
	} else if (personalMovieDB.count <= 10) {
		alert("Просмотрено довольно мало фильмов!")
	} else if (personalMovieDB.count === 0) {
		alert("Произошла ошибка!")
	};
};

function showMyDB() {
	if (personalMovieDB.privat != true) {
		console.log(personalMovieDB);
	};
};

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	};
};

writeYourGenres();

detectPersonalLevel();