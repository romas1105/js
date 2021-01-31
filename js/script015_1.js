'use strict';
alert('Код - вопросы пользователю про фильмы с помощью циклов');
const lengthStr=20;
const numberOfFilms = +prompt('Сколько фильмов уже просмотрели?', '');//вопрос на форме с преобразованием значения в целое число +prompt
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},//пустой объект
    actors:{},//пустой объкт
    genders:[],//пустой массив
    privat: false//логический тип с присвоенным значением
};


for (let i=0; i<2; i++)
    {
        const   film = prompt('Название вашего любимого фильма: ', ''),
                b=prompt('Оценка фильму', '');
        if (film.length < lengthStr && film != null && film != '' && b != null && b != '')
        {
            alert('Условия меня устраивают');
            personalMovieDB.movies[film]=b;
            console.log(film);
            i++;
        }
        else {
            alert('Повторите ввод снова');
            console.log('Error');
            i--;
            }
    }
console.log(personalMovieDB);

