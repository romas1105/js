"use strict";
// вывод модального окна
alert('Hello modal');
// модальное окно с обращением к пользователю (true/false)
const result=confirm("Are you here?");
console.log(result);
//вопрос пользователю, с ответом по умолчанию
const answer=prompt("Вам есть 18?", "16");
console.log(answer);
//проверка на тип данных, введенных в вопросе prompt (возвращает только строковое)
const answer2=prompt("Введеите число", "");
console.log(typeof(answer2));
//Преобразование в число
const answer3=+prompt("Введеите число", "");
console.log(typeof(answer3));
//Анкета с массивом
const answers=[];
answers[0]=prompt('Фамилия', '');
answers[1]=prompt('Имя', '');
answers[2]=prompt('Отчество', '');
console.log(answers);
console.log(typeof(answers));