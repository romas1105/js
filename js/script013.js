'use strict';
alert('угадай число');
//var result=true;
const result= confirm('Угадай число в модальном окне');

 const num=50; //задгали число
 const a=prompt('Введите число: ', '');
 if (a>num) {alert('Введенное число больше заданного');}
 else if (a<num) {alert('Веденное число меньше заданного');}
 else if (a==num) {alert('Вы угадали, это число: ')};
// тернарный опертор сравнения (условие) ? (случай если тру) : (случай если фолс)
 (num==a) ? console.log('ОК') : console.log('Error');
// несколько проверок условий - строгое соотвествие
const a=49:
switch(a) {
    case 49:
        console.log('меньше на 1');
        break;
    case 50:
        console.log('совпало');
        break;
    case 51:
        console.log('больше на 1');
        break;
    default:
        console.log('Вообще не совпало');
        break;
    }
