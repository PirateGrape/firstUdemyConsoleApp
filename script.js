'use strict';

let numberOfFilms =
    prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//вариант с циклом for
for (let i = 1; i <= numberOfFilms; i++) {

    let a = //название фильма
    prompt("Один из последних просмотренных фильмов?", '');

    if(a == null) {
        a = prompt('Пожалуйста, введите название одного из последних просмотренных фильмов', '');
    } else if(a.length == 0) {
        a = prompt("Пожалуйста, укажите название одного из последних просмотренных фильмов");
    } else if(a.length > 50) {
        a =prompt("Пожалуйста, введите название покороче (макс. 50 символов)");
    }
    let b = //оценка фильма
    prompt("На сколько оцените его?", '');

    personalMovieDB.movies = personalMovieDB.movies + " " + `${a} ${b}`;
}

//вариант с циклом while
/*
while(numberOfFilms > 0) {
    let a =
    prompt("Один из последних просмотренных фильмов?", '');
    if(a.length == 0) {
        a = prompt("Пожалуйста, укажите название одного из последних просмотренных фильмов");
    }
    else if(a.length > 50) {
        a =
        prompt("Пожалуйста, введите название покороче (макс. 50 символов)");
    }
    let b =
    prompt("На сколько оцените его?", '');

    personalMovieDB.movies = personalMovieDB.movies + " " + `${a} ${b}`;

    numberOfFilms--;
}
*/

console.log(personalMovieDB);

//Проверка на количетсво просмотренных фильмов
if(numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms < 30) {
    console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}