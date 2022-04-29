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
let month = 12
alert(month > 0 && month || month == 12 < 3 ? 'Зима' : month > 0 && month < 3 ? 'Зима' : month > 0 && month < 3 ? 'Зима' : 'зима')