"use strict";
// типизация данных. переводим их строки в число. Добавляем унарный плюс перед строковым значением
console.log(4 + +"5");

//префикс и постфикс

//инкремент и дикремент постфиксный. 
let incr=10,
    decr=10;
incr++;
decr--;
console.log(incr);
console.log(decr);
//Сначала берется значение, затем инкрементируется, проверка в консоле
let incr=10,
    decr=10;

console.log(incr++);
console.log(decr--);

//инкремент и дикремент префиксный. Сначало инкрементируется значение, затем записывается результат
let incr=10,
    decr=10;
++incr;
--decr;
console.log(incr);
console.log(decr);
// остаток от деления
console.log(5%2);
//сравнение
console.log(2*4 == 8);
//или
console.log(2*4 == '8');
//строгое сравнение
console.log(2*4 === 8);
//сравнение и &&, или ||
const ischeck=true,
    isform=true;
console.log(ischeck && isform);
//отрицание !, не равно !=
const ischeck=true,
    isform=true;
console.log(ischeck || !isform);
//
 
