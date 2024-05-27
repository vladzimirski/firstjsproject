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

for (let i = 0; i < 2; i++) {
	const a = prompt("Последний просмотренный фильм?", ""),
		b = +prompt("Ваша оценка", "");
	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		console.log("done")
		personalMovieDB.movies[a] = b;
	}else {
		console.log("error")
		i--;
	}
	
}
console.log(personalMovieDB);

if (personalMovieDB.count >= 30) {
	alert("Вы киноман!")
}else if(personalMovieDB.count >= 10){
	alert("Вы классичсекий зритель!")
}else if(personalMovieDB.count <= 10) {
	alert("Просмотрено довольно мало фильмов!")
} else if (personalMovieDB.count === 0) {
	alert("Произошла ошибка!")
}
// if (6 == 9) {
// 	console.log("ok");
// } else {
// 	console.log("error");
// }

// // if (num < 49) {
// // 	console.log("Error")
// // }else if (num > 100) {
// // 	console.log("mnogo");
// // }else {
// // 	console.log("Yes")
// // }

// // (num === 50) ? console.log("ok") : console.log("error");
// const num = 50;

// switch (num) {
// 	case 49:
// 		console.log("error");
// 		break;
// 	case 100:
// 		console.log("Mnogo");
// 		break;
// 	case 51:
// 		console.log("Ok");
// 		break;
// 	default:
// 		console.log("error");
// 		break;
// }

// // const humburger = 2,
// // 	fries = 1;
// // if (humburger === 3 && fries) { 
// // 	console.log(`Все сыты`);
// // } else {
// // 	console.log(`Мы уходим`);
// // }

// const humburger = 3,
// 	fries = 3,
// 	cola = 0,
// 	nagets = 2;
// if (humburger === 3 && cola === 2 || fries === 3 && nagets) {
// 	console.log(`Все довольны`);
// } else {
// 	console.log(`Мы уходим`);
// }


// // while (i <= 9) {
// // 	i ++;
// // 	console.log(i);
// // }
// let i = 5

// switch (i) {
// 	case 6:
// 		console.log("bred");
// 		break;
// 	case 4:
// 		console.log("bred");
// 		break;
// 	case 5:
// 		console.log("ne bred");		
// 		break;
// }

// let numer = 50;

// while (numer <= 55) {
	
// 	console.log(numer);
// 	numer++;
// }