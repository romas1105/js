'use strict';
alert('Код - вопросы пользователю про фильмы с помощью циклов');
const lengthStr=50
for (let i=0; i<2; i++)
{
    let film=prompt('Название вашего любимого фильма: ', '');
    if (film.length < lengthStr && film != null && film != '') {
        alert('Условия меня устраивают');
        console,log(film);
    }
    else {alert('Повторите ввод снова');
         i--;}
      
}
