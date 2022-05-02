var rezulet = document.querySelector('#response')
    //1
    // message = prompt("Кто вошёл?");
    // if (message =='Админ') {
    //     pass = prompt("Введите пароль");
    //     if (pass =='Чёрный властелин') {
    //         alert("Добро пожаловать")
    //     }
    //     else if (message != 'Чёрный властелин') {
    //         alert("Пароль не верный")
    //     }
    //     else{
    //         alert("Вход отменен")
    //     }
    // }
    // else if (message != 'Админ') {
    //     alert("Я вас не знаю")
    // }
    // else{
    //     alert("Вход отменен")
    // }

// 2
// str='abcde'
// alert(str[0])
// alert(str[1])
// alert(str[4])

//3
// hour=prompt('Введите кол-во часов')
// alert(hour+' часов это '+ hour*3600 + " секунд")

//4
// num=1
// num+=12
// num-=14
// num*=5
// num/=7
// num+=1
// num-=1
// alert(num)

//5
// num=3
// alert(num)

// a=10
// b=2
// alert(a+b)
// alert(a-b)
// alert(a*b)
// alert(a/b)

// c=15
// d=2
// result=c+в
// alert(result)

// a=10
// b=2
// c=5
// alert(a+b+c)

// a=17
// b=10
// c=a-b
// d=7
// result=c+d
// alert(result)

//6
// let str = "Привет мир!"
// alert(str)

// let str1 = "Привет "
// let str2 = "мир!"
// alert(str1+str2)

// let name="Ваня"
// alert('Привет, '+ name +'!')

// let age = 18;
// alert('Мой возраст, '+ age +'!')

//7
// let name = prompt('Введите ваше имя')
// alert('Ваше имя adfasd'+ name)

// let num = prompt("Введите число")
// alert(Math.pow(num, 2)) 

//8
// let str  = 'abcde'
// alert(str[0])
// alert(str[2])
// alert(str[4])

// let num = "12345";
// let mult=1;

// for (let i = 0; i < num.length; i++) {
//     mult*=Number(num[i])
// }
// alert(mult)

//9
// let sec=60
// alert("В часе: " + Math.pow(sec,2)+" секунд")
// alert("В сутках: " + Math.pow(sec,2)*24 +" секунд")
// alert("В сутках: " + (Math.pow(sec,2)*24)*30 +" секунд")

// var now = new Date();
// let hour = now.getHours()
// let min = now.getMinutes()
// let sec = now.getSeconds()

// alert(hour + ':'+ min + ':'+sec)

// let num=4141223
// alert(Math.pow(num, 2))

// 10
// let array = ['Привет', ' мир', ' !']
// alert(array[0] + array[1] + array[2])

//11
// let array = ['Привет', ' мир', ' !']
// array[0] = 'пока'
// alert(array[0] + array[1] + array[2])

//12
// let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' }
// alert('Зп Пети: ' + obj.Петя)
// alert('Зп Коли: ' + obj.Коля)

//13

// let arr = [1,2,3,4,5]

// let arr = []
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[3] = 4
// arr[4] = 5

//14

// var arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green'],
// }

// alert(arr.ru[0])

//15

// let arr = ['a', 'b', 'c']
//     // alert(arr)

// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i])
// }

// let arr = ['a', 'b', 'c', 'd']
// alert(arr[0] + "+" + arr[1] + "," + arr[2] + "+" + arr[3])

// let arr = [2, 5, 3, 9]
// let result = (arr[0] * arr[1]) + (arr[2] * arr[3])
// alert(result)

//15
// 
// let obj = { a: 1, b: 2, c: 3 }
// alert(obj.c)
// alert(obj['c'])

// let obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' }
// alert('Зп Пети: ' + obj.Петя)
// alert('Зп Коли: ' + obj.Коля)

// let week = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 0: 'Вс' }
// var now = new Date()
// now_week = now.getDay()
// alert(week[now_week]);

// let week = { 1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 0: 'Вс' }
// let day = 2
// alert(week[day]);

//16

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// alert(arr[1][0])

// let language = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' }
// alert(language.js[0])

// var week = { ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] }
// alert(week.ru[0] + ' ' + week.en[2])

// var lang = { ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'], en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] }
// var now = new Date()
// day = now.getDay()
// alert(lang.ru[day])

//17
// let a = prompt('Введите число')
// alert(a == 10 ? 'Верно' : 'Не верно')

//18
// let min = 10
// alert(min <= 14 ? "Первая четверть часа" : min > 14 && min < 29 ? "Вторая четветь часа" : min > 29 && min < 44 ? 'Третья Четверть часа' : 'Четвертая четверть часа')

//19
// let lang = 'ru'
// let arr = []

//if
// if (lang == 'ru') {
//     arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
// }

// if (lang == 'en') {
//     arr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// }

//switch

// switch (lang) {
//     case 'ru':
//         arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
//         break;

//     case 'en':
//         arr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
//         break;
// }

//через массив
// var arr = { ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] }

// alert(arr[lang])

//20
// let a = prompt('Введите число')
// alert(a == 0 ? 'Верно' : 'Не верно')

// let a = prompt('Введите слово')
// alert(a == 'test' ? 'Верно' : 'Не верно')

// let a = prompt('Введите 1')
// alert(a == 1 ? 'Верно' : 'Не верно')

//21
// let month = 12
// alert(month > 0 && month || month == 12 < 3 ? 'Зима' : month > 0 && month < 3 ? 'Зима' : month > 0 && month < 3 ? 'Зима' : 'зима')

// let str = 'abcde'
// str[0] == 'a' ? alert('да') : alert('нет')

// let str = '12345'
// str[0] == '1' || str[0] == '2' || str[0] == '3' ? alert('да') : alert('нет')

// let str = '123'
// alert(Number(str[0]) + Number(str[1]) + Number(str[2]))

// let str = '123321'
// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2])
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5])
// sum1 === sum2 ? alert('Да') : alert('Нет')

//21
// for (let i = 1; i < 51; i++) {
//     console.log(i);
// }

//22
// let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//23
// var obj = {
//     'Минск': 'Беларусь',
//     'Киев': 'Украина',
//     'Москва': 'Россия'
// }

// for (const key in obj) {
//     alert(`${key}-это ${obj[key]}`)
// }

//24
// let array = [2, 5, 9, 15, 0, 4]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 3 && array[i] < 10) {
//         alert(array[i])
//     }
// }


// let array = [1, 2, 3, -10, 4, -8]
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//         sum += array[i]
//     }
// }
// alert(sum)


// let array = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] == 4) {
//         alert('Есть')
//         break
//     }
// }


// let array = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < array.length; i++) {
//     for (let m = 0; m < String(array[i]).length; m++) {
//         if (String(array[i])[m] == 1 || String(array[i])[m] == 2 || String(array[i])[m] == 5) {
//             alert(array[i])
//             break
//         }
//     }
// }


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let result = '-'

// for (let i = 0; i < array.length; i++) {
//     result += `${array[i]}-`
// }
// alert(result)

// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// for (let i = 0; i < week.length; i++) {
//     i >= 5 ? document.write(week[i].bold() + ' ') : document.write(week[i] + ' ')
// }

// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
// let now = new Date();
// let day = now.getDay();

// for (let i = 0; i < week.length; i++) {
//     i == day - 1 ? document.write(week[i].italics() + ' ') : document.write(week[i] + ' ')
// }

// let n = 1000
// let num = 0
// while (n > 50) {
//     n /= 2
//     num++
// }
// alert(num)


//25
// function cub(n) {
//     alert(Math.pow(n, 3))
// }

// cub(5)

//26
// function cub(n) {
//     alert(Math.pow(n, 2))
// }

// cub(2)

// function sum(a, b) {
//     alert(a + b)
// }

// sum(1, 2)

// function sum(a, b, c) {
//     alert((a - b) / c)
// }

// sum(1, 2, 5)

// function weekDay(day) {
//     let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
//     alert(week[day - 1])
// }

// weekDay(1)

//27
// let array = [1, -5, 3, -1414, 45, -123, 31, 445, 12]
// let newArray = []

// function isPositive(num) {
//     if (num > 0) {
//         return true
//     } else {
//         return false
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (isPositive(array[i])) {
//         newArray.push(array[i]);
//     }
// }

// alert(newArray)

// function isNumberInRange(num) {
//     if (num > 0 && num < 10) {
//         return true
//     } else {
//         return false
//     }
// }

// alert(isNumberInRange(5))

// let array = [1, -5, 3, -1414, 45, -123, 31, 445, 12]
// let newArray = []

// function isNumberInRange(num) {
//     if (num > 0 && num < 10) {
//         return true
//     } else {
//         return false
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (isNumberInRange(array[i])) {
//         newArray.push(array[i]);
//     }
// }

// alert(newArray)

// let sum = 0

// function getDigitsSum(digits) {
//     let chislo = Array.from(String(digits)).map(i => Number(i))
//     for (let i = 0; i < chislo.length; i++) {
//         sum += chislo[i]
//     }
// }

// getDigitsSum(11)
// alert(sum);

//30
// function val() {
//     document.querySelector('#val').value = 'Поставьте пожалуйста 5 :3'
// }

//31
// function pow() {
//     alert(Math.pow(document.querySelector('#pow').value, 2))
// }

//32
// function color() {
//     document.querySelector('#colorInput').style = 'color: red;  '
// }

//33

// function disable() {
//     document.querySelector('#active').disabled = true
// }

// function enable() {
//     document.querySelector('#active').disabled = false
// }


//34

//1
// var count = 0

// function clickCount() {
//     updateCount(++count)
// }

// function updateCount(val) {
//     document.querySelector('#btn').innerHTML = val
// }

//2

// function pow() {
//     document.querySelector('#rez').disabled = false;
//     document.querySelector('#rez').value = Math.pow(document.querySelector('#val').value, 2)
// }

//3 ДОДЕЛАТЬ
// let num = []
// let result = 0

// function displayCount(el) {
//     document.querySelector('#rez').value += el.value
//     num.push(el.value)
// }

//35

// function clickID() {
//     document.querySelector('span').innerHTML = 'Поставьте 5 :3'
// }

//36
// function upd() {
//     let punkt = document.querySelectorAll('p')
//     for (let i = 0; i < punkt.length; i++) {
//         punkt[i].innerHTML = i + 1
//     }
// }

//37-38
// function upd() {
//     let punkt = document.querySelectorAll('.zzz')
//     for (let i = 0; i < punkt.length; i++) {
//         punkt[i].innerHTML = i + 1
//     }
// }

//39
// function upd() {
//     document.querySelector('p').innerHTML = 'Почти закончил!!!'
// }

//40
// let now = new Date();
// let date = now.getFullYear() + ':' + (now.getMonth() + 1) + ':' + now.getDate()
// alert(date)

//41
// let now = new Date();
// let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
// alert(arr[now.getMonth()])

//42.1
// let now = new Date()
// let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
// alert(arr[now.getMonth()])

//42.2
// alert(now.getFullYear())

//42.3
// function addNul(num) {
//     return ('0' + num)
// }

// let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

// let day = now.getDate() < 10 ? addNul(now.getDate()) : now.getDate()
// let month = now.getMonth() < 10 ? addNul(now.getMonth()) : now.getDate()
// let date = `${day}.${month}.${now.getFullYear()}`
// alert(time + ' ' + date)

// function active() {
//     window.setInterval(timer, 1000)
// }

// function timer() {
//     let timer = document.querySelector('#timer')
//     timer.innerHTML = parseInt(timer.innerHTML) + 1
// }

//24
// let clock = document.querySelector('#clock')
// let sec = 0
// let min = 0
// let hour = 0

// function addNul(num, a) {
//     if (num < 10) {
//         return (`0${num}`)
//     } else {
//         return (num)
//     }
// }

// setInterval(() => {
//     sec++
//     if (sec == 60) {
//         sec = 0
//         min++
//         if (min == 60) {
//             min = 0
//             hour++
//         }
//     }
//     clock.innerHTML = `${addNul(hour)}:${addNul(min)}:${addNul(sec)}`
// }, 1000);