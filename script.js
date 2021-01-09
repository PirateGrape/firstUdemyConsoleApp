"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        numberOfFilms = +prompt("Сколько у вас любимых фильмов?", '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько у вас любимых фильмов?", '');
        }
    },
    detectPersonalLevel: function () {
        if (numberOfFilms < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
            console.log('Вы классический зритель');
        } else if (numberOfFilms >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
            while(personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null ||
            !isNaN(personalMovieDB.genres[i])) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        personalMovieDB.genres.forEach(function(d, e, genres){
            console.log(`Любимый жанр #${e} - это ${personalMovieDB.genres[e]}`);
        });
    },
    rememberMyFilms: function () {
        //вариант с циклом for
        for (let i = 1; i <= numberOfFilms; i++) {

            let a = //название фильма
                prompt("Название одного из ваших любимых фильмов?", '');

            if (a == null) {
                a = prompt('Пожалуйста, введите название название одного из ваших любимых фильмов', '');
            } else if (a.length == 0) {
                a = prompt("Пожалуйста, укажите название одного из ваших любимых фильмов");
            } else if (a.length > 50) {
                a = prompt("Пожалуйста, введите название покороче (макс. 50 символов)");
            }
            let b = //оценка фильма
                prompt("На сколько оцените его?", '');

            personalMovieDB.movies[a] = b;
        }
    
    /*
    вариант с циклом while

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
    },
    toggleVisibleMyDB: function() {
        if(!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};

/* Вариант без методов основного объекта, а с отдельными функциями.
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}


function detectPersonalLevel() {
    //Проверка на количетсво просмотренных фильмов
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

function rememberMyFilms() {

    //вариант с циклом for
    for (let i = 1; i <= numberOfFilms; i++) {

        let a = //название фильма
            prompt("Один из последних просмотренных фильмов?", '');

        if (a == null) {
            a = prompt('Пожалуйста, введите название одного из последних просмотренных фильмов', '');
        } else if (a.length == 0) {
            a = prompt("Пожалуйста, укажите название одного из последних просмотренных фильмов");
        } else if (a.length > 50) {
            a = prompt("Пожалуйста, введите название покороче (макс. 50 символов)");
        }
        let b = //оценка фильма
            prompt("На сколько оцените его?", '');

        personalMovieDB.movies = personalMovieDB.movies + " " + `${a} ${b}`;
    }

}
/*
вариант с циклом while

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

start();

rememberMyFilms();

// console.log(personalMovieDB);

writeYourGenres();

detectPersonalLevel();

showMyDB();

*/

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();