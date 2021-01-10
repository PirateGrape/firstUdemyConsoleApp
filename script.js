"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt("Сколько у вас любимых фильмов?", '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько у вас любимых фильмов?", '');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
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
            while (personalMovieDB.genres[i] === '' || personalMovieDB.genres[i] == null) {
                personalMovieDB.genres[i] = prompt(`Пожалуйста, введите ваш любимый жанр под номером ${i}`);
            }
        }
        personalMovieDB.genres.forEach((d, e) => {
            console.log(`Любимый жанр #${e} - это ${personalMovieDB.genres[e]}`);
        });
    },
    rememberMyFilms: function () {
        //вариант с циклом for. Ниже идет вариант с циклом while,
        //но он мне не очень нравится.
        for (let i = 1; i <= personalMovieDB.count; i++) {

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
        Вариант с циклом while. Он мне не очень нравится, но для тренировки
        надо попробовать.

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
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

/* Вариант, в котором все функции прописаны отдельно, а не как методы
основного объекта. Часть функций не оптимизирована, но в основном они
такие же.

//запуск опросника
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}


function detectPersonalLevel() {
    //Проверка на количетсво любимых фильмов
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

//Вывод данных
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

//Опросник по любимым жанрам
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

//Опросник про любимые фильмы (часть вопросов устарела)

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
вариант с циклом while. Он мне не очень нравится, но для тренировки
        надо попробовать.

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


//Старый вариант запуска опросника.
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