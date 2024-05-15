"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const a = prompt("Последний просмотренный фильм?", ""),
	b = +prompt("Ваша оценка", ""),
	c = prompt("Последний просмотренный фильм?", ""),
	d = +prompt("Ваша оценка", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);


if (6 == 9) {
	console.log("ok");
} else {
	console.log("error");
}

// if (num < 49) {
// 	console.log("Error")
// }else if (num > 100) {
// 	console.log("mnogo");
// }else {
// 	console.log("Yes")
// }

// (num === 50) ? console.log("ok") : console.log("error");
const num = 50;

switch (num) {
	case 49:
		console.log("error");
		break;
	case 100:
		console.log("Mnogo");
		break;
	case 51:
		console.log("Ok");
		break;
	default:
		console.log("error");
		break;
}

// const humburger = 2,
// 	fries = 1;
// if (humburger === 3 && fries) { 
// 	console.log(`Все сыты`);
// } else {
// 	console.log(`Мы уходим`);
// }

const humburger = 3,
	fries = 3,
	cola = 0,
	nagets = 2;
if (humburger === 3 && cola === 2 || fries === 3 && nagets) {
	console.log(`Все довольны`);
} else {
	console.log(`Мы уходим`);
}



