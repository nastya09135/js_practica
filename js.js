'use strict';
//Домашнее задание

// Переменные:years, guests, myDog, cups, tea, dogname, age, year
// Функции:dogYears, makeTea, secret
// Встроенные функции: log
// Аргументы:dogname, age, cups, tea
// Параметры:myDog, 4, guests, 'Earl Grey'
 


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt2 = 'JS';
console.log(txt2.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let txt3 = 'я люблю javascript!';
console.log(txt3.substr(2,6));
console.log(txt3.substring(2,7));
console.log(txt3.slice(2, 8));
console.log(txt3.substr(8,10));
console.log(txt3.substring(8,18));
console.log(txt3.slice(8, 18));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let str4 = 'я люблю JS!';
console.log(str4.indexOf('люблю'));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt5 ='я люблю JS!';
let n=6;
let result ="";
if (n<txt5.length){
    result=txt5.substr(0, n)+ "...";
}else {
    result=txt5;
}
console.log(result);


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let txt6 = 'Я-люблю-JS!';
console.log(txt6.replace(/-/g, "!"));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let txt7 = 'я люблю JS';
let arr = txt7.split(' ');
console.log(arr);


// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txt8 = 'привет мир';
console.log(txt8.split(""));









// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.
let city1={};
city1.name= "ГородN";
city1.population= 1000000;

// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
let city2={
name:"ГородM",
population: 1e6
};

// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.
city1.getName=function(){
    return this.name;
};
city2.getName=function(){
    return this.name;
};

console.log(city1.getName());
console.log(city2.getName());


// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.
city1.exportStr=function(){
    return `name=${this.name}\npopulation=10000000\n`;
}
city2.exportStr=function(){
    return `name=${this.name}\npopulation=10000000\n`;
}
console.log(city1.exportStr());
console.log(city2.exportStr());


// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..
function getObj(){
    return this;
}
city1.getCity=getObj;
city2.getCity=getObj;
console.log(city1.getCity().getName()+' '+city1.getCity().population);
console.log(city2.getCity().getName()+' '+city2.getCity().population);


// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
let d1 = [45,78,10,3];
d1[7]=100;
console.log(d1);


// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
let d2 = [45,78,10,3];
let sum2=0;
for(let i=0;i<d2.length; i++){
   sum2 +=d2[i];
}
console.log(sum2);



// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
let d3 = [45,78,10,3];
d3[7]=100;
let sum3=0;
for( let el in d3){
   sum3 +=d3[el];
}
console.log(sum3);


// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
let d4=[45,78,10,3]
d4.sort((a, b) => b - a);
console.log(d4);


//3 практическая 
//1 задание 
function buttonClick1(){
    let elem = document.getElementById('elem');
    elem.innerHTML='<b>'+'Ку-ку! А я жирный!'+'</b>';
}

// Задача 2
function buttonClick2(){
    let elem2 = document.getElementById('elem2');
    elem2.innerHTML= '<h3>Абзац превратился в h3!</h3>'
}
//3 задание 
function buttonClick3(){
    let elem3 = document.getElementById('elem3')
    elem3.outerHTML = '<h3>' + elem3.innerHTML + '</h3>';
}

//4 задание 
function sum(){
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var result = document.getElementById('result');
    result.innerHTML = num1 + num2;
}


//5 задание 
function buttonClick5(){
    var elements = document.getElementsByClassName('a');
    for (var i = 0; i < elements.length; i++){
        elements[i].innerHTML = i;
    }
}

