'use strict';

const numberOfFilms = +prompt('Сколько фильмов уже просмотрели?', '');//вопрос на форме с преобразованием значения в целое число +prompt
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},//пустой объект
    actors:{},//пустой объкт
    genders:[],//пустой массив
    privat: false//логический тип с присвоенным значением
};

const   a=prompt('Один из последних просмотренных фильмов?', ''),//задаем вопросы
        b=prompt('На сколько оцените его?', ''),
        c=prompt('Один из последних просмотренных фильмов?', ''),
        d=prompt('На сколько оцените его?', ''); 

personalMovieDB.movies[a]=b; //связываем в переменной personalMovieDB значения в массиве a:b
personalMovieDB.movies[c]=d; //связываем в переменной personalMovieDB значения в массиве c:d

console.log(personalMovieDB);