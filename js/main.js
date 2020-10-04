"use strict";

// let bigNum1 = 1111111111111111111111111111111111111111111111111111111111111n;
// let bigNum2 = 8888888888888888888888888888888888888888888888888888888888888n;
// console.log(bigNum2 / bigNum1); // 8
// ! BigInt

// let name = "Kate";
// console.log(`Your name is ${name}`); Your name is Kate
// ! Строки с обратными кавычками

//  console.log('10' - `${2+2}`); // 6
// ! Так тоже можно

// let i = 3;
// while (i) console.log(i--); // 3, 2, 1

// breakit:for (let i = 0; i < 5; ++i) {
//   for (let j = 0; j < 5; ++j) {
//     console.log(i,j);
//     if (i+j == 5) break breakit;
//   }
// }
// полностью завершится на 1,4
// !метки для выхода из вложенных циклов

// let fieldName = "abc";

// let newObj = {
//   [fieldName]: "truba",
//   "field2 sign": "Kate",
// };

// console.log(newObj.abc); // truba
// !значение переменной в качестве имени свойства

// function makeObj(name, song) {
//   return {
//     name,
//     song,
//   };
// }

// let newObj = makeObj("Tsoi", "Spokoinaya noch");
// создаст объект newObj = { name: 'Tsoi', song: 'Kukushka' }
// !совпадение имени свойства и имени аргумента, содержащей значение свойства

// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// array.forEach((elem, index, arr) => arr[index] = elem * index);
// console.log(array);
// !forEach (Возвращает Undefined, просто выполняет функцию для каждого элемента массива)
// !есть необязательный  параметр thisArg, который явно задает значение, используемое в качестве this
// выведет 0, 9, 16, 21, 24, 25, 24, 21, 16, 9, 0

// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// console.log(array.map((elem,index,arr)=> elem*2));
// !map (В отличие от forEach, выполняет функцию для каждого элемента и возвращает массив из получившихся значений)
// !то бишь нужно использовать return или однострочную стрелочную функцию.
// !есть необязательный  параметр thisArg, который явно задает значение, используемое в качестве this
// выведет 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0

// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// console.log(array.filter(elem => elem > 5));
// выведет 10, 9, 8, 7, 6
// !filter (Фильтрует массив и возвращает полученный, передаваемый колбэк должен возвращать true или false)

// let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// console.log(array.some(elem => elem>5));//true
// console.log(array.every(elem => elem>5));//false
// !every - логическое И (все элементы должны соответствовать условию) , some - Логическое ИЛИ (хотя бы один элемент должен удовлетворять условию), возвращают true или false соответственно, передаваемый колбэк должен возвращать true или false

// console.log(array.reduce((sum,elem)=>sum+=elem*2));// 100
// console.log(array.reduce((sum,elem)=>sum+=elem*2, 0)); // 110, т.к. указали initialValue = 0
// !Четыре, а не три параметра колбэка (+ промежуточный результат)
// !Также в reduce можно передать initialValue после колбэка - тогда начальным значением промежуточного результата будет указанное initialValue и reduce начнет работать с первого элемента массива.
// !По умолчанию промежуточный результат равен первому элементу (в данном примере sum = array[0]), а выполнение колбэка ведется со следующего элемента
// !суть reduce, reduceRight - свернуть массив до одного значения

// function maximum(...args) {
//   return args.reduce((max,elem)=> elem > max ? elem : max);
// }
// console.log(maximum(1,4312,421,62,5342,523452,35,23452,45,2,42,5));// 523452 , использовали остаточные параметры
// !остаточные параметры позволяют собрать произвольное число параметров в массив, с которым удобно работать

// console.log(Math.max(1,2,3,4,5)); // 5 , но что если аргументов много
// let args = [1,2,3,4,5,6,7,8,9,10];
// console.log(Math.max(...args)); // 10 , использовали оператор расширения
// let array = [[0,1],[2,3],[4,5]];
// console.log(array.reduce((sum, elem)=> [...sum, ...elem])); // [0,1,2,3,4,5]
// !операторы расширения позволяют разобрать массив на аргументы для функции

// let sym = Symbol.for('id');
// ! Глобальный символ, можно создать новый символ, равный глобальному
// let sym2 = Symbol('id2');
// ! Локальный символ, всегда уникален, даже если создать новый символ с таким же описанием
// console.log(Symbol.keyFor(sym)); // id
// console.log(Symbol.keyFor(sym2)); // undefined

// let newObj = {
//   name: "Nikita",
//   age: "22",
// };

// let secrets = Symbol("secrets");
// newObj[secrets] = "Nothing to hide";
// for (let field in newObj) {
//   console.log(field)
// } // name, age
// !for .. in не видит символы
// console.log(newObj[secrets]) // Nothing to hide

// let ladder = {
//   step: 0,
//   up: () => { // ! неверно, у стрелочных функций нет собственного this, пример правильного синтаксиса у down
//     ++this.step;
//     return this;
//   },
//   down: function () {
//     --this.step;
//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };

// function ObjCreator(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let me = new ObjCreator("Nikita", 22);
// let kate = new ObjCreator("Kate", 21);
// ! функция-конструктор

// let a = 35.9;
// console.log(a.toString(16)); // 23.e66..
// ! Перевод в другую систему счисления
// console.log(a.toFixed(0)) // 35
// ! Полезный метод отброса дробной части, возвращает строку
// console.log(Object.is(NaN,NaN)); //true
// ! Более точное сравнение по сравнению с ===
// console.log(isFinite('15')) // true
// ! Проверка на конечность числа
// ! неожиданно выдает true на null

// this.name = "Nikita";

// let newObj = {
//   name: "Kate",
//   output: () => console.log(this.name),
//   output2: function () {
//     console.log(this.name);
//   },
// };

// newObj.output(); // Nikita
// newObj.output2(); // Kate
// ! Наглядная разница в this для arrow function и function expression
// ! Свойство и переменная не одно и то же!!! (this.name != let name)

// function sum(number) {
//   let currentSum = number;

//   let innerFunc = function (number) {
//     if (!isFinite(number)) return currentSum;
//     currentSum += number;
//     return innerFunc;
//   };
//   innerFunc.toString = function() {
//     return currentSum;
//   }
//   return innerFunc;
// }
// console.log(sum(1)()); // 1
// ! Преобразование объекта в примитив

// globalThis.a = 1;
// globalThis.b = 2;
// function sum(c, d) {
//   console.log(this.a + this.b + c + d);
// }
// sum(3, 4); // ! 10 Сработает только с отключенным use strict
// sum.call(globalThis, 3, 4); // ! для use strict придется явно указывать контекст через call/apply
// sum.apply(globalThis, [3,4]);

// function makeArr() {
// return arguments.slice() // ! Не сработает, для arguments нет метода slice
// return Array.prototype.slice.call(arguments);
// }

// console.log(makeArr('sdf','sdfsdf','dfssdf','sfddf'))

// function Calculator() {
//   this.calculate = function (str) {
//     let arr = str.split(" ");
//     let a = +arr[0];
//     let b = +arr[2];
//     return Calculator.prototype.methods[arr[1]](a, b);
//   };
// }
// Calculator.prototype.addMethod = function (name, func) {
//   if (!Calculator.prototype.methods) {
//     Calculator.prototype.methods = {};
//   }
//   Calculator.prototype.methods[name] = func;
// }

// let calc = new Calculator();
// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("+", (a, b) => a + b);
// calc.addMethod("-", (a, b) => a - b);
// calc.addMethod("**", (a, b) => a ** b);
// console.log(calc.calculate("5 ** 4"));
// ! Калькулятор с возможностью добавить метод

// let user = {
//   name: "Nikita",
//   sayHi(phrase) {
//     if (!phrase) phrase = "Hello";
//     console.log(phrase + " " + this.name);
//   },
// };
// let binded = user.sayHi.bind(user);
// setTimeout(binded, 1000); // Hello Nikita
// let binded2 = user.sayHi.bind(user, "Bye");
// setTimeout(binded2,500); // Bye Nikita
// ! bind, в отличие от call и apply, не вызывает, а сохраняет функцию с привязанным контекстом для последующего вызова

// function output(name = "Катя", age = 21) {
//   console.log(`Имя - ${name}, возраст -  ${age}`);
// }
// output(); // Катя, 21
// ! Дефолтные значения аргументов

// let map = new Map();

// map.set('1','hello');
// map.set(1,'bye');
// console.log(map); // { '1' => 'hello', 1 => 'bye' }
// ! В отличие от объектов у мапа для ключей можно использовать другие типы, в т.ч. объекты

// let name = 'Kate';
// let age = 21;

// let newObj = {
//   name,
//   age,
// }

//
// Object.defineProperty(newObj,'password', {
//   enumerable: true, // password можно увидеть в списке свойств
//   get: function() {
//     return this.name+this.age;
//   }
// })
// console.log(Object.keys(newObj)); // name, age, password
// console.log(newObj.password); // Kate21
// ! defineProperty добавляет или изменяет свойство объекта, а также управляет доступом к нему

// let name = "Nikita";
// let age = 22;

// let newObj = {
//   name,
//   age,
//   get password() {
//     return this.name + this.age;
//   },
// };
// Object.defineProperty(newObj,'password',{
//   enumerable: false
// });
// console.log(Object.keys(newObj)); // name, age
// console.log(newObj.password); // Nikita22
// ! Новый синтаксис, но указание флагов через defineProperty

// class Person {
//   constructor(name = Person.defaultName(), age = 0, birthYear = 2020) {
//     (this.name = name), (this.age = age), (this.birthYear = birthYear);
//   }
//   static defaultName() {
//     // ! Статическую функцию можно задать в теле класса
//     return "John Doe";
//   }
//   addYears(years) {
//     this.age += years;
//     this.birthYear -= years;
//     return this;
//   }
//   get output() {
//     return `Your name is ${this.name}, you are ${this.age} years old and you were born in ${this.birthYear}`;
//   }
// }
// Person.count = 0; // ! Статические свойства задаются после тела класса перед другим кодом
// let me = new Person(); // John Doe, 0, 2020
// // console.log(me.defaultName()) // Ошибка
// console.log(me.output); // Your name is John Doe...
// ! Классы

// let arr = [1, 2, 3, 4, 5, 6, 6];
// let newMap = new Map([
//   ["hello", 1],
//   ["value", "name"],
// ]);
// let newSet = new Set(arr); // 1,2,3,4,5,6
// console.log(newSet);
// ! Map - набор пар ключ-значение, в отличие от объектов, ключи могут быть любыми
// ! Set - набор уникальных значений без ключей. Вставка новых значений и проверка на уникальность проводится быстрее, чем аналогичные операции над массивом.
// ! .keys() , .values() , .entries() - для map и set возвращают итерируемый объект ключей/значений/пар ключ-значение
// ! к элементам set нельзя обратиться по индексу

// let visitedSet = new WeakSet();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(mary);
// console.log(visitedSet.has(john)); // true
// john = null;
// console.log(visitedSet.has(mary)); // true
// console.log(visitedSet.has(john)); // false

// ! WeakMap И WeakSet позволяют сборщику мусора выгрузить из памяти удаленные объекты (обычно данные не удаляются, пока они достижимы)
// ! Пример использования - кэширование. Если объект, кэш которого хранится в WeakMap'е удалить, удалится и кэш

// ! Object.keys() , Object.values() , Object.entries() - возвращают реальные массивы

// let arr = ['Nikita', 'Gukovskiy'];
// let [name, surname] = arr;
// console.log(name); // Nikita
// console.log(surname); // Gukovskiy
// ! Деструктурирующее присваивание массивов

// class Person {
//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let Nikita = new Person('Nikita',22);
// let Kate = new Person('Kate',21);
// let {name: me, age: myAge} = Nikita;
// console.log(me) // Nikita
// console.log(myAge) // 22
// ! Деструктурирующее присваивание объектов

// let me = {
//   name: 'Nikita',
//   age: 22,
//   toJSON() {
//     return `${this.name}, ${this.age}`;
//   }
// }

// let me2 = {
//   name: 'Nikita',
//   age: 22,
// }
// console.log(JSON.stringify(me)); // "Nikita, 22"
// console.log(JSON.stringify(me2)); // {"name":"Nikita","age":22}

// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };

// console.log(JSON.stringify(meetup)) // {"title":"Conference","date":"2017-01-01T00:00:00.000Z","room":{"number":23}}

// ! JSON.stringify вызывает toJSON для объекта, если таковой метод имеется
// ! Некоторые встроенные объекты имеют свой toJSON, например, Date

// class List {
//   constructor(...arr) {
//     if (!arr.length) {
//       throw new SyntaxError('No args')
//     }
//     let pointer = this;
//     for (let i in arr) {
//       pointer.value = arr[i];
//       if (+i === arr.length - 1) {
//         pointer.next = null;
//         return this;
//       }
//       pointer.next = {};
//       pointer = pointer.next;
//     }

//   }

//   addValue(val) {
//     let pointer = this;
//     if (pointer.value === undefined) {
//       pointer.value = val;
//       pointer.next = null;
//       return 0;
//     }
//     while (pointer.next !== null) {
//       pointer = pointer.next;
//     }
//     pointer.next = {};
//     pointer = pointer.next;
//     pointer.value = val;
//     pointer.next = null;
//   }

//   get length() {
//     let size = 0;
//     let pointer = this;
//     if (pointer.value === undefined) {
//       return 0;
//     }

//     while (pointer) {
//       size++;
//       pointer = pointer.next;
//     }
//     return size;
//   }

//   printList() {
//     let pointer = this;
//     if (pointer.value === undefined) return [];
//     let resArray = [];
//     while (pointer) {
//       resArray.push(pointer.value);
//       pointer = pointer.next;
//     }
//     return resArray;
//   }
// }

// let list = new List(1, 2, 3);
// list.addValue(4);
// let list2 = new List(5,6,7);
// list2.addValue(8);
// console.log(list.printList()); // [1,2,3,4]
// console.log(list2.printList()); // [5,6,7,8]
// ! Односвязный список

// let arr = [1,2,3,4,5,100500];
// console.log(arr.findIndex((elem)=>elem === 3)) // 2
// ! find, findIndex принимают колбэк и возвращают значение элемента/индекс элемента, удовлетворяющего условию в колбэке.
// TODO: Попрактиковаться с использованием, чтобы не писать постоянно циклы

// let newObj = {
//   name: "Nikita",
//   lastName: "Gukovskiy",
//   age: 22,
//   height: 178,
// };

// for (let i in newObj) {
//   if (newObj.hasOwnProperty(i)) { // проверка на принадлежность свойства непосредственно объекту
//     console.log(i);
//   }
// }
// ! for .. in может пройтись не только по свойствам непосредственно объекта, но и по свойствам прототипа

// let func1 = function() {
//   console.log('hello')
// }
// console.log(func1.name); // func1
// ! свойство name возвращает имя функции

// function func(a, b, ...more) {
//   console.log(func.length);
//   return a + b;
// }
// console.log(func.length) // 2

// ! свойство length возвращает количество параметров функции в ее объявлении

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello ${who}`)
//   } else {
//     func('Guest');
//   }
// }

// console.log(sayHi.name); // func
// func("Guest") // Ошибка
// sayHi(); // Hello Guest
// sayHi("Nikita"); // Hello Nikita

// ! Помимо Function Expression(FE) и Function Declaration(FD), существует Named Function Expression (NFE)
// ! NFE позволяет функции ссылаться на саму себя (с помощью func в данном случае), даже если значение, в которое произошло присваивание функции было изменено (sayHi)

// let newFunc = new Function('a','b','return a+b');
// console.log(newFunc(1,2));
// ! new Function фактически парсит функцию из набора строк, где все строки, кроме последней - аргументы, а последняя - тело. Используется крайне редко. Функция, созданная таким образом, ВСЕГДА ссылается на глобальное окружение

// function sum(...arr) {
//   console.log(arr.reduce((sum, elem) => sum + elem));
// }
// let timerID = setTimeout(sum, 500, 1, 2, 3, 4, 5); // выведет 15 через 500 мс + время, затраченное на выполнение функции
// clearTimeout(timerID) // отмена вызова таймаута
// console.log(timerID); // выведет экземпляр класса Timeout
// ! setTimeout вызывает передаваемую функцию один раз, через указанное количество миллисекунд

// setInterval(console.log, 500, 'Hello world') // будет вызывать console.log с аргументом Hello world каждые 500 миллисекунд
// ! setInterval вызывает передаваемую функцию каждый раз через определенный промежуток времени
// ! Также можно использовать рекурсивный setTimeout для более тонкой настройки
// let repeat = setInterval(()=>console.log('Hello'), 500);
// setTimeout(()=>clearInterval(repeat),2100); // Hello выведется 4 раза, после чего выполнится clearInterval
// ! clearTimeout, clearInterval служат для прекращения дальнейшего выполнения

// function printNumbers(from, to) {
//   let current = from;
//   let int = setInterval(function() {
//     console.log(current++);
//     if (current > to) clearInterval(int)
//   }, 1000);
// }

// printNumbers(5,10)

// function printNumbers(from, to) {
//   setTimeout(function func(value = from) {
//     console.log(value);
//     if (value >= to) return;
//     setTimeout(func, 1000, value+1)
//   },1000)
// }

// printNumbers(5,10)

// function sum(...args) {
//   return args.reduce((sum, elem) => sum + elem, 0);
// }

// function makeHash() {
//   return Array.prototype.join.apply(arguments);
// }

// function cachedFunc(func) {
//   function wrapper(...args) {
//     let hash = makeHash(args);
//     if (wrapper.cache.has(hash)) {
//       // console.log('from cache')
//       return wrapper.cache.get(hash);
//     }
//     let result = func(...args);
//     wrapper.cache.set(hash,result);
//     return result;
//   }
//   wrapper.cache = new Map();
//   return wrapper;
// }

// sum = cachedFunc(sum);

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 8));
// console.log(sum(1, 2, 3, 9));
// console.log(sum.cache); // map из четырех пар
// ! создание обертки для кэширования результатов функции

// function f(x, y="default", z="default2") {
//   console.log(`x: ${x}, y: ${y}, z: ${z}`);
// }

// function delay(f, ms) {
//   return (...args) => setTimeout(f, ms, ...args);
// } // 1 вариант

// function delay(f, ms) {
//   return setTimeout.bind(f, f, ms);
// } // 2 вариант

// function delay(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// } // 3 вариант
// let f1000 = delay(f, 3000);
// let f1500 = delay(f, 1500);

// f1000("test1","test1.1");
// f1500("test2");
// ! Декоратор для обертки функции и вызова ее через определенное время

// let newObj = {
//   name: "Nikita",
//   age: 22
// }

// let newObj2 = Object.create(newObj);
// newObj2.name = "Ekaterina";
// console.log(newObj2.name); // Ekaterina
// console.log(newObj2.__proto__.name); // Nikita
// ! Object.create создает объект c указанным объектом прототипа

// let newObj = {
//   name: "Nikita",
//   age: 22,
//   output() {
//     console.log(`name: ${this.name}, age: ${this.age}`);
//   },
// };

// let newObj2 = {
//   name: "Kate",
//   age: 21,
// };

// newObj2.output(); // Ошибка
// newObj.output.apply(newObj2); // name: Kate, age: 21
// newObj2.__proto__ = newObj;
// newObj2.output(); // name: Kate, age: 21
// ! Явно задаем прототип объекта

// let arr = [1,2,3,4,5];

// Array.prototype.multBy = function(multiplier) {
//   return this.map(elem => elem*multiplier);
// }

// console.log(arr.multBy(5)) // [5,10,15,20,25]
// ! можно создавать собственные методы для существующих прототипов

// console.groupCollapsed('Vehicles'); // заголовок группы
// console.groupEnd();
// ! console.group и console.groupEnd задают группу сообщений, которая будет синтаксически отделена от прочего контента консоли. groupCollapsed делает то же, что и group, но по умолчанию сворачивает группу сообщений
// console.warn('error');
// ! console.warn выделяет красным текст в консоли

// let f = debounce(console.log, 1000);

// f(1);
// f(2);

// setTimeout(() => f(3), 100);
// setTimeout(() => f(4), 1100);
// setTimeout(() => f(5), 1500);

// function debounce(f, ms) {
//   let isCooldown = false;
//   return function () {
//     if (isCooldown) return;
//     f.apply(this, arguments);
//     isCooldown = true;
//     setTimeout(() => (isCooldown = false), ms);
//   };
// }
// ! функция debounce разрешает вызывать console.log не чаще раза в секунду

// function debounce(func, ms) {
//   let isAvailable = true;
//   return function(context, ...args) {
//     if (!isAvailable) return;
//     isAvailable = false;
//     setTimeout(()=>isAvailable = true, ms);
//     return func.apply(context, args);
//   }
// }

// let debounceSplit = debounce(String.prototype.split, 1000);
// console.log(debounceSplit("hello world", ""));
// console.log(debounceSplit("hello world2", ""));
// setTimeout(()=>console.log(debounceSplit("hello world3", "")), 500);
// setTimeout(()=>console.log(debounceSplit("hello world4", "")), 1100);
// setTimeout(()=>console.log(debounceSplit("hello world5", "")), 1500);
// setTimeout(()=>console.log(debounceSplit("hello world6", "")), 2201);
// ! debounce с передачей контекста

// let tempObj = Object.create({},{
//   name: {
//     value: 'Nikita',
//     enumerable: true, // перечисляемость, false по умолчанию
//     writable: true, // перезаписываемость, false по умолчанию
//     configurable: true, // возможность удалить ключ, false по умолчанию
//   },
//   age: {
//     value: 22,
//   }
// });

// console.log(tempObj); // { name: 'Nikita' } , т.к. age будет иметь enumerable = false по умолчанию
// ! Создание объектов через Object.create(). Первый параметр - прототип, второй - propertiesObject с ключами и их дескрипторами

// let newObj = {
//   name: 'Nikita',
//   age: 22,
// }
// Object.freeze(newObj)
// newObj.age = 23; // Ошибка, нельзя присвоить значение read-only свойству
// console.log(newObj);
// ! Object.preventExtensions запрещает добавлять свойства
// ! Object.seal запрещает добавлять/удалять свойства, устанавливает configurable: false,
// ! Object.freeze запрещает добавлять/удалять/изменять свойства, устанавливает configurable: false, writable: false

// class Person {
//   constructor(name = Person.defaultName(), age = Person.defaultAge()) {
//     this.name = name;
//     this.age = age;
//     console.log(`Created: ${this.name}, ${this.age}\n-----`);
//   }
//   static defaultName() {
//     return 'John';
//   }
//   static defaultAge() {
//     return 18;
//   }
// }

// let me = new Person('Nikita', 22);

// console.log(Object.getOwnPropertyDescriptor(me, 'name')); // { value: 'Nikita', writable: true, enumerable: true, configurable: true }
// Object.defineProperty(me, 'name', {
//   enumerable: false,
//   configurable: false,
// });
// ! Изменяем свойство name
// console.log(Object.getOwnPropertyDescriptor(me, 'name')); // { value: 'Nikita', writable: true, enumerable: false, configurable: false }
// ! getOwnPropertyDescriptor возвращает объект - дескриптор свойства, в нём содержится значение свойства (value) и его флаги (enumerable, configurable, writable)

// let obj = {
//   get output() {
//     console.log('hello');
//   },
//   set output(val) {
//     console.log(val);
//   }
// }
// obj.output; // hello
// obj.output = 'bye' // bye
// console.log(Object.keys(obj)) // output - только одно свойство output
// ! геттер и сеттер при литеральном объявлении объекта, снаружи они выглядят как свойства
// ! геттер срабатывает при попытке чтения значения, сеттер - при попытке записать значение
// ! свойства бывают двух типов - свойства-аксессоры (с геттером и сеттером), либо свойства-значения (с value в дескрипторе)

// let smth = {
//   isAlien: false,
// }
// function Person(name, age) {
//   this.name = name || 'Nikita';
//   this.age = age || 22;
// }
// Person.prototype = smth; // ! При вызове new F() прототипом объекта станет smth
// let me = new Person();
// console.log(me.constructor === Person)

// console.log(me.isAlien);

// ! У функций существует свойство prototype. По умолчанию оно является объектом, в котором существует одно свойство constructor, которое ссылается на функцию-конструктор, в качестве значения свойства prototype может выступать только объект или null

// class Person {
//   constructor(name = 'Nikita', age = 22) {
//     this.name = name,
//     this.age = age
//   }
// }

// let me = new Person();
// let you = new me.constructor('Sergey');

// console.log(me); // Person { name: 'Nikita', age: 22 }
// console.log(you); // Person { name: 'Sergey', age: 22 }
// ! Использование конструктора существующего объекта для создания нового, подобного исходному

// let person = {
//   type: 'man',
// }

// let me = {
//   name: 'Nikita',
// }
// console.log(Object.getPrototypeOf(me)); // {}
// Object.setPrototypeOf(me, person)
// console.log(me.type); // man
// ! Object.getPrototypeOf возвращает свойство [[Prototype]]
// ! Object.setPrototypeOf устанавливает [[Prototype]]
// ! Эти два метода являются современной заменой .__proto__ , т.к. это лишь исторически сложившийся геттер/сеттер

// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// ! clone - абсолютно точная копия объекта obj , с тем же прототипом и теми же свойствами, в том числе неперечисляемыми

// let me = {
//   name: 'Nikita',
//   __proto__: 'Haha',
// }
// console.log(me.__proto__);
// ! Не выведет Haha, т.к. __proto__ - необычное свойство, находящееся в прототипе объекта
// let you = Object.create(null);
// you.name = 'Kate';
// you.__proto__ = 'Haha'
// console.log(you.__proto__)
// ! Haha

// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит.`)
//   }
// }

// class Rabbit extends Animal{ // ! Класс-потомок

// constructor(...args) {
//   super(...args)
// }
// ! ^ Конструктор по умолчанию для класса-потомка, фактически - вызов родительского конструктора

//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// ! ^ В конструкторе класса-потомка обязательно использование super, причем до использования this.

//   hide() {
//     console.log(`${this.name} прячется`);
//   }
//   stop() {
//     super.stop() // ! super.[method]() вызывает родительский метод
//     this.hide();
//   }
// }

// let animal = new Rabbit('Заяц', 10);
// animal.run(25)
// console.log(animal.__proto__.__proto__ === Animal.prototype)
// console.log(Object.getOwnPropertyNames(animal));
// animal.stop();

// class Worker {
//   constructor(firstName, lastName, occupation) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.occupation = occupation;
//   }
//   get print() {
//     return `name: ${this.lastName}, ${this.firstName}, occupation: ${this.occupation}`;
//   }
// }

// class TopWorker extends Worker {
//   constructor(firstName, lastName, occupation, salary) {
//     super(firstName, lastName, occupation);
//     this.salary = salary;
//   }
//   get print() {
//     return super.print + `, salary: ${this.salary}`;
//   }
//   #secretInfo = "corrupted";
// // ! Приватное поле класса, не будет доступно снаружи и в дочерних классах
//   get secret() {
//     return this.#secretInfo;
//   }
// }
// let president = new TopWorker("Donald", "Trump", "president", 200000);
// console.log(president.secret);

// class ExtendedArray extends Array {
// ! Расширение встроенного класса, используется станда ртный конструктор Array
//   power(n) {
//     return this.map((elem) => elem ** n);
//   }
//   static get [Symbol.species]() {
// ! Symbol.species переопределяет конструктор по умолчанию для создания новых объектов
//     return Array;
//   }
// [Symbol.toStringTag] = this.constructor.name; // ! настраивает поведение метода объектов toString
// }

// let arr = new ExtendedArray(1, 2, 3, 4, 5); // ! Создание инстанса нового класса ExtendedArray
// arr.sort((a, b) => b - a); // ! Сортировка унаследована от Array и возвращает объект унаследованного класса (ExtendedArray)
// console.log(arr.power(5)); // ! Все числа массива будут возведены в указанную степень

// console.log(arr instanceof ExtendedArray); // true
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true
// console.log(arr instanceof Number); // false
// ! оператор instanceof позволяет узнать, к какому классу принадлежит объект

// function getTypeOf(arg) {
//   return Object.prototype.toString.call(arg).split(" ").slice(1).join(' ').slice(0, -1);
// }
// console.log(getTypeOf(5)); // Number
// console.log(getTypeOf({})); // Object
// console.log(getTypeOf(arr)); // ExtendedArray
// ! создаем функцию getType, которая будет использовать toString для проверки типа/принадлежности класса

// function sayHi(arg) {
//   if (arg.forEach) { // ! утиная проверка на массив
//     arg.forEach((elem) => sayHi(elem));
//   } else console.log(`Hello, ${arg}`);
// }

// let arrOfNames = ["Nikita", "Katya", ["Vasya", "Sasha"], "Maxim"];
// sayHi(arrOfNames);

// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (e) {
//   console.log("не сработает"); // до сюда скрипт не дойдет, т.к. ошибка выскочит уже после завершения блока
// }
// ! try/catch необходим для отлова ошибок, работает синхронно, поэтому в данном случае не перейдет на catch

// try {
//   console.log(randomvar);
// } catch (err) {
//   // err - объект ошибки
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // randomvar is not defined
//   console.log(err.stack); // стек вызова, по сути выведет то же, что и console.log(err)
// }

// try {
//   let res = JSON.parse('{"sdf":"dfs"}');
//   fdsfjs;
//   if (!res.name) {
//     throw new SyntaxError("no name value");
//   }
// } catch (err) {
//   if (err.name === "SyntaxError") {
//     console.error(err.name); // SyntaxError
//     console.error(err.message); // no name value
//   } else {
//     throw err; // проброс неожиданного исключения
//   }
// } finally {
//   console.log("It's all over");
// }
// ! throw позволяет отлавливать ошибки, характерные для нашей задачи, ошибка отправляется в catch
// ! Посторонние ошибки, которые не обрабатываются в catch - пробрасываются
// ! finally исполняется в любом случае, даже при использовании return в try или catch

// ! КОЛБЭКИ И ПРОМИСЫ

// ! Конструктор объекта Promise принимает колбэк (executor) с двумя параметрами - resolve и reject. При создании объекта executor выполняется сразу
// ! У созданного инстанса класса Promise существуют внутренние свойства - state, result
// ! state - pending во время выполнения колбэка, fulfilled - при вызове resolve, rejected - при вызове reject
// ! result - undefined вначале, value - при вызове resolve(value), error - при вызове reject(error)
// ! executor переводит промис в одно из двух состояний: (state: "fulfilled", result: value) или (state: "rejected", result: error)

// ! У объекта класса Promise также существуют методы then, catch, finally
// ! then() - принимает два колбэка, первый выполнится при успешном выполнении промиса (вызове resolve), второй при ошибке (вызове reject)
// ! catch() - принимает колбэк, который выполнится при ошибке, по сути сокращенный вариант then(null, f)
// ! finally() - принимает колбэк, который выполнится в любом случае, но, в отличие от then(f, f) не принимает аргументов для колбэка
// ! finally пропускает сквозь себя результат или ошибку к следующим обработчикам, никак не модифицируя соответствующие аргументы

// ! https://codepen.io/gukovskiy98/pen/GRZdLPG - Пример с чейнингом и подключением сторонних библиотек

// ! Обработчик в then, catch, finally для создания цепочки может возвращать не промис, а любой другой объект, содержащий метод then (thenable object). Это может быть полезно при использовании сторонних реализаций thenable объекта, совместимых ос стандартными промисами
// ! Если обработчик в then, catch, finally не является функцией, то эти методы просто пробросят промис сквозь себя, сохраняя state и result

// ! catch отлавливает не только вызов resolve, но и другие ошибки, выброшенные с помощью throw, состояние промиса также изменится на rejected
// ! Из блока catch можно пробрасывать ошибку дальше, если у нас нет обработчика для очередной ошибки, можно поймать ее в браузере с помощью window.addEventListener("unhandledrejection", f)

// ! PROMISE API

// ! Promise.all([...promises]) - принимает массив промисов, после выполнения всех промисов, возвращает промис, результатом которого является массив результатов переданных промисов (порядок сохраняется)
// ! Если любой из промисов завершится с ошибкой, Promise.all также немедленно завершится с ошибкой, результаты остальных промисов будут игнорироваться, хотя они могут завершиться
// ! Также в Promise.all можно передать не промис, а любое другое значение, тогда оно передастся в результирующий массив без изменений

// ! Promise.allSettled([...promises]) - также принимает массив промисов, но возввращает массив с объектами в виде [{status:fulfilled, value: <...> },{status:rejected, reason: <...>},...] , т.е. не вылетает немедленно из-за ошибки

// ! Promise.race([...promises]) - возвращает результат первого выполнившегося промиса

// ! Promise.resolve(value) - создает успешно выполненный промис с результатом value
// ! Promise.resolve(value) то же самое, что new Promise(resolve => resolve(value))

// ! Promise.reject(error) - создает промис, завершенный с ошибкой error

// ! Как правило, для всех асинхронных операций стоит возвращать промис, даже если он не нужен в данный момент

// ! Собственный класс MyOwnPromise

// class MyOwnPromise {
//   constructor(executor) {
//     this.queue = [];
//     this.errorHandler = () => {};
//     this.finallyHandler = () => {};
//     try {
//       executor(this.onResolve.bind(this), this.onReject.bind(this));
//     } catch(e) {
//       this.errorHandler(e);
//     } finally {
//       this.finallyHandler()
//     }
//   }
//   onResolve(data) {
//     this.queue.forEach(callback => data = callback(data));
//     this.finallyHandler()
//   }
//   onReject(error) {
//     this.errorHandler(error);
//     this.finallyHandler();
//   }
//   then(fn) {
//     this.queue.push(fn);
//     return this;
//   }
//   catch(fn) {
//     this.errorHandler = fn;
//     return this;
//   }
//   finally(fn) {
//     this.finallyHandler = fn;
//     return this;
//   }
// }

// let p = new MyOwnPromise(function(resolve) {
//   setTimeout(()=> {console.log('Test1');
//     resolve('Haha')
//   }, 5000);
// }).then(data => console.log(data)).then(()=>console.log('done'));

// ! -------------------- БРАУЗЕРНЫЙ  API ------------------------

// ! window - глобальный объект браузера
// ! navigator, location и т.д. - браузерные объекты (BOM)
// ! window - окно браузера

// ! inspect(node) в браузере переносит фокус на указанный элемент

// ! document - корневой элемент DOM дерева
// ! document.documentElement - соответствует тегу HTML
// ! document.body, document.head - соответствуют body и head

// let children = document.body.childNodes;
// console.log(children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// ! childNodes возвращает коллекцию (объект-псевдомассив) дочерних узлов
// ! !!! К ДОЧЕРНИМ УЗЛАМ ТАКЖЕ ОТНОСЯТСЯ ТЕКСТОВЫЕ УЗЛЫ И КОММЕНТАРИИ
// ! firstChild/lastChild возвращает первого/последнего ребенка

// ! DOM-коллекции только для чтения
// ! Почти все DOM-коллекции живые, т.е. если сохранить ссылку на коллекцию в какую-то переменную, то при изменении узлов в DOM-дереве, изменятся элементы в коллекции

// ! for .. in плохо подходит для перебора коллекций, т.к. помимо непосредственно элементов коллекции перебирает все перечисляемые свойства, в том числе редко используемые методы

// console.log(document.body.parentNode === document.documentElement) // true
// console.log(document.head.nextSibling === document.body); //true
// console.log(document.body.previousSibling === document.head); // true
// ! parentNode возвращает родительскую ноду
// ! nextSibling, previoiusSibling - следующую и предыдущую ноду соответственно

// console.log(document.body.children);
// ! children, в отличие от childNodes, возвращает только узлы-элементы (теги)
// ! firstElementChild, lastElementChild, previousElementSibling, nextElementSibling, parentElement - игнорируют текстовые ноды и ноды-комментарии

// console.log(document.documentElement.parentElement); // null
// console.log(document.documentElement.parentNode); // document
// ! корневой элемент document не является узлом-элементом

// ! для таблиц существуют дополнительные свойства, способные возвращать коллекции строк и прочие разные вещи

// console.log(document.getElementById('str'));
// ! getElementById - возвращает элемент по id, работает только с document (document.getElementById)

// console.log(document.querySelectorAll('.button'));
// ! querySelectorAll - в качестве параметра принимает css-селектор (также поддерживаются псевдоклассы) и возвращает статическую коллекцию всех найденных элементов с этим селектором

// console.log(document.querySelector('.button'));
// ! querySelector - то же, что и querySelectorAll, но возвращает первый найденный узел

// let a = document.querySelector('.button');
// console.log(a.matches('h2')); // false
// console.log(a.matches('.button')); // true
// ! elem.matches принимает селектор и проверяет, соответствует ли элемент этому селектору
// ! elem.closest возвращает ближайшего предка, удовлетворяющего переданному селектору, в т.ч. может вернуть себя

// console.log(document.body.contains(document.querySelector('.button'))); // true
// ! elemA.contains(elemB) возвращает true/false в зависимости от того, является ли elemB потомком elemA или нет (при elemA === elemB также вернется true

// ! ----------- КЛАССЫ DOM-УЗЛОВ ----------------

// ! EventTarget - корневой абстрактный класс DOM, благодаря нему все DOM-узлы поддерживают события
// ! В EventTarget.prototype содержатся методы по типу addEventListener и т.п.

// ! Node - абстрактный класс, наследуется от EventTarget, обеспечивает базовую функциональность для DOM-узлов (parentNode, nextSibling, previousSibling и т.д.)

// ! Text и Comment - базовые классы для текстовых узлов и узлов-комментариев

// ! Element - базовый класс для DOM-элементов, наследуется от Node, обеспечивает навигацию по DOM-элементам и методы поиска, является базой для более узкоспециализированных классов - XMLElement, SVGElement, HTMLElement

// console.log(document.body instanceof HTMLBodyElement); // true
// ! HTMLElement - базовый класс для HTML-элементов в DOM, от него наследуются HTMLAnchorElement и прочие элементы, соответствующие HTML-тегам

// ! elem.nodeType - "старый" способ узнать тип DOM-узла, возвращает число. (1 соответствует элементу, 3 - тексту и т.п.)

// ! elem.tagName - возвращает имя тега для DOM-элемента
// ! elem.nodeName - для DOM-элементов то же, что и elem.tagName, для прочих элементов возвращает строку с типом узла (#comment например)

// ! elem.innerHTML - возвращает HTML-содержимое элемента в виде строки
// ! elem.outerHTML - возвращает целиком разметку элемента в виде строки, т.е. innerHTML + теги самого элемента
// ! При перезаписывании (elem.outerHTML = ...) во внешнем документе содержимое изменится, т.к. outerHTML фактически просто заменяет элемент другим кодом, но с элементом ничего не происходит
// ! Эти два метода работают только для DOM-элементов, что логично

// ! elem.data предоставляет содержимое ТЕКСТОВОГО узла
// ! elem.textContent возвращает текст внутри узла за вычетом тегов, работает со всеми типами узлов
// ! elem.hidden то же самое, что и display: none

// ! elem.[value, id, href...] свойства, соответствуют СТАНДАРТНЫМ HTML-атрибутам

// ! методы ниже работают в том числе для нестандартных атрибутов
// ! elem.hasAttribute(name) - проверка наличия атрибута
// ! elem.getAttribute(name) - получение значения атрибута
// ! elem.setAttribute(name, value) - устанавливает значение атрибута
// ! elem.removeAttribute(name) - удаляет атрибут
// ! elem.attributes - возвращает коллекцию атрибутов, принадлежащую встроенному классу Attr, у элементов коллекции есть свойства name и value, имена атрибутов регистронезависимые
// ! атрибуты HTML-тегов регистронезависимы, значения HTML-атрибутов всегда строки (но значения связанных DOM-свойств могут быть и булевыми значениями, и объектами и т.д.)

// ! если изменять значение атрибута HTML-тега как свойство связанного с ним DOM-элемента, то, как правило, значение атрибута тоже меняется (можно проверить с помощью elem.getAttribute(name), то же верно в обратную сторону, то бишь меняя атрибут с помощью elem.setAttribute, меняется свойство elem.[name])
// ! исключение - свойство value в input-полях (input.value), тогда при изменении атрибута меняется свойство, но изменение свойства не влияют на атрибут (elem.getAttribute выдаст старое значение)

// ! data-атрибуты зарезервированы для использования программистами
// let but1 = document.querySelector('.button1');
// console.log(but1.dataset.specialInfo); // ! берем из атрибута data-special-info
// ! атрибуты из нескольких слов (через дефис) изменяются на верблюжью нотацию (special-info => specialInfo)
// ! при этом (specialInfo => specialinfo, т.к. атрибуты регистронезависимые)

// ! --------- ИЗМЕНЕНИЕ ДОКУМЕНТА ---------

// ! document.createElement(tag) - создает новый элемент
// ! document.createTextNode(text) - создает новый текстовый узел с заданным текстом внутри

// ! --------- МЕТОДЫ ВСТАВКИ ---------

// ! node.append() - в конец ноды
// ! node.prepend() - в начало ноды
// ! node.before() - перед нодой
// ! node.after() - после ноды
// ! node.replaceWith() - замена ноды
// ! можно передавать несколько аргументов
// ! При вставке таким способом, переданный текст присваивается безопасно (как, например, textContent), т. е. <h1>text</h1> ровно так и отобразится на странице, текст не будет отформатирован как заголовок
// ! innerHTML вставится именно как HTML

// ! Чтобы вставить непосредственно HTML-код с сохранением тегов в определенное место ноды, можно использовать node.insertAdjacentHTML
// ! where - может иметь 4 значения - 'beforebegin' (перед началом ноды), 'afterbegin' (в начале ноды), 'beforeend' (перед концом ноды), 'afterend' (после ноды)
// ! node.insertAdjacentHTML(where, html) - второй параметр - строка с HTML-кодом
// ! node.insertAdjacentText(where, text) - второй параметр - строка, которая будет вставлена в неизменном виде
// ! node.insertAdjacentElement(where, element) - второй параметр - элемент(нода)
// ! как правило, используется только node.insertAdjacentHTML, т.к. остальные два можно заменить на более короткие prepend, append и т.п., они принимают как параметр и текст, и узлы

// ! node.remove() - удаляет узел

// ! elem.cloneNode(true|false) - клонирует узел включая все атрибуты и дочерние узлы(true) или без дочерних узлов(false)

// ! DocumentFragment - специальный DOM-узел, который служит оберткой для группировки других узлов
// ! При вставке узла DocumentFragment сам узел "исчезает" и вместо него вставляется содержимое узла
// ! Иногда проще и удобнее использовать обычный массив для хранения узлов

// ! -------------- СТИЛИ И КЛАССЫ --------------

// ! elem.className - возвращает значение атрибута class в виде строки
// ! elem.classList - объект с методами для добавления/удаления классов, является перебираемым, можно использовать for..of

// ! elem.classList.add/remove() - добавить/удалить класс
// ! elem.classList.toggle() - добавляет класс, если его нет и наоборот
// ! elem.classList.contains() - проверяет на наличие класса

// ! elem.style - объект, содержащий инлайновые css-свойства
// ! Для установки свойств в атрибут style, нужно переводить css-свойство в CamelCase, т.е. background-color станет backgroundColor и т.д. Пример: elem.style.zIndex = 1;
// ! Можно использовать сокращенные свойства по типу elem.style.margin , т.е. те, которые содержат в себе несколько свойств. Они будут автоматически развернуты до marginTop, marginBottom и т.п.

// ! Для сброса значение инлайнового css-свойства нужно присвоить пустую строку, т.е. elem.style.[свойство] = ''

// ! elem.style.cssText - возвращает инлайновые свойства в виде строки, также в cssText можно записывать целые строки, в которых содержатся много css-свойств
// ! elem.setAttribute('style', [строка]) - делает то же самое

// ! Поскольку свойство elem.style обращается только к атрибуту style, что и логично, то для прочтения прочих, присущих данному элементу атрибутов, нужно использовать getComputedStyle.(elem, [pseudo])
// ! elem - элемент, свойство для которого мы хотим получить, pseudo - опциональный параметр, указывается, если нужно получить стиль для псевдоэлемента, передается в виде строки, например: '::before', '::after'
// ! getComputedStyle возвращает объект со всеми окончательными css-свойствами элемента в абсолютных величинах, но может вернуть auto
// ! Для получения свойства нужно указывать ТОЧНОЕ свойство, правильная работа сокращенного свойства не гарантирована (marginTop - ок, margin - не ок)

// ! Для посещенных ссылок (помеченных псевдоклассом :visited) стили, применяемые с помощью :visited скрываются, к ним нельзя получить доступ

// ! -------------- РАЗМЕРЫ --------------

// ! Полоса прокрутки "отщипывает" кусок от ширины контента, например если при box-sizing: content-box мы зададим ширину блока в 150 пикселей, но из-за большого количества контента будет появляться полоса прокрутки, то фактическая ширина уменьшится (в моем случае дло 140 пикселей)

// let wr = document.querySelector('.wrapper');
// console.log(wr.offsetParent == document.body); // true
// ! elem.offsetParent - возвращает предка элемента, который является css-позиционированным, т.е. относительно которого вычисляются координаты для elem
// ! offsetParent == null, если элемент скрыт (display: none), или его position: fixed
// ! elem.offsetLeft, elem.offsetTop - возвращают координаты относительно верхнего левого угла родительского элемента
// ! elem.offsetWidth, elem.offsetHeight - возвращают полную ширину элемента, включая рамки
// ! Частный случай - эти значения будут равны заданным нами при box-sizing: border-box;
// ! Для скрытых элементов размеры будут равны нулю

// ! elem.clientLeft, elem.clientTop - отступы от внутреней части до внешней. Часто совпадают с толщиной левой и верхней рамки соответственно
// ! elem.clientWidth, elem.clientHeight - ширина и высота внутренней части (включая padding!)
// ! В clientWidth не входит полоса прокрутки

// ! elem.scrollWidth, elem.scrollHeight - полная внутренняя ширина и высота, включая прокручиваемую область
// ! Если горизонтальной прокрутки нет, то scrollWidth = clientWidth
// ! elem.style.height = `${elem.scrollHeight}px`; - развернет элемент на всю высоту

// ! elem.scrollLeft, elem.scrollTop - возвращают величину прокрученной части, также являются сеттерами
// ! Остальные свойства только для чтения!!!

// ! getComputedStyle(elem).width не стоит использовать, т.к. во-первых width величина относительная, зависит от box-sizing, а во-вторых браузеры реагируют по-разному на это свойство, например, хоть все браузеру резервируют место под полосу прокрутки из ширины контента, но Firefox будет возвращать width равное ширине, включающей полосу, chrome вычтет ширину полосы прокрутки. При этом, отображение элемента будет идентичным, что и логично

// ! document.documentElement.clientWidth / clientHeight - возвращают ширину и высоту окна браузера
// ! window.innerWidth, innerHeight - делают то же самое, но лучше использовать предыдущий вариант, т.к. innerWidth / innerHeight не учитывают полосу прокрутки, а в большинстве случаев нам более полезна информация об действительных размерах окна браузера
// ! Для вычисления ширины / высоты ВСЕГО документа интуитивно хочется вызвать свойство scrollWidth / scrollHeight, но лучше вычислять максимальное из соответствующих scroll/offset/client свойств

// ! document.documentElement.scrollTop / scrollLeft , window.pageXOffset / pageYOffset - делают по сути одно и то же - возвращают величину прокрутки в пикселях, но у scrollLeft / scrollTop могут быть проблемы с совместимостью, а pageXOffset / pageYOffset являются только геттерами

// ! elem.scrollBy(x, y) - прокручивает элемент на заданное число пикселей ОТНОСИТЕЛЬНО текущего положения
// ! elem.scrollTo(x, y) - прокручивает элемент на заданное число пикселей от левого верхнего угла элемента
// ! elem.scrollIntoView(true|false) - прокручивает страницу так, чтобы элемент, для которого вызван метод оказался вверху (true) или внизу (false)

// ! elem.style.overflow = "hidden" - запрещает прокрутку, полосы прокрутки также исчезают, т.е. clientWidth увеличится

// ! -------------- КООРДИНАТЫ --------------

// ! elem.getBoundingClientRect() - возвращает в виде объекта координаты относительно окна для минимального по размеру прямоугольника, который содержит в себе элемент
// ! x, y - координаты верхнего левого угла прямоугольника относительно окна
// ! width, height - ширина и высота прямоугольника соответственно
// ! top, bottom - Y-координата верхней/нижней границы прямоугольника (top = y, bottom = y+height)
// ! left, right - X-координата левой/правой границы прямоугольника (left = x, right = x+width)

// ! В IE 11 и некоторых других браузерах не поддерживается x,y, практически во всех случаях можно использовать top,left как альтернативу

// ! document.elemFromPoint(x,y) - возвращает самый глубоко вложенный элемент по координатам x,y (координаты относительно окна!)
// ! Если координаты ведут за пределы окна, то возвращает null

// ! Для получения координат относительно начала ДОКУМЕНТА не существует стандартизированного способа, но можно использовать координаты относительно окна + window.pageXOffset / window.pageYOffset

// ! -------------- СОБЫТИЯ --------------

// ! Обработчик события - функция, вызываемая, когда событие произошло

// ! Обработчик может быть задан прямо в HTML-разметке с помощью атрибута on<событие>, например: <p onclick="..."></p>

// ! Также обработчик можно задать как свойство DOM-элемента, т.е. elem.onclick = function() {...}
// ! По сути, этот способ аналогичен предыдущему, т.к. при задании с помощью атрибута браузер прочитает HTML-атрибут, создаст функцию с телом из атрибута и отправит ее в свойство DOM-элемента
// ! Обработчик всегда содержится в свойстве DOM-элемента, а атрибут - лишь один из способов задания

// ! Убрать обработчик можно, присвоив ему null
// ! При использовании ключевого слова this внутри обработчика, оно будет привязано к элементу, к которому был прикреплен обработчик
// ! <button id="button" onclick="alert(this.innerHTML)">Нажми меня</button> выведет содержимое кнопки

// ! С помощью предыдущих двух способов можно задать не более одного обработчика onclick, т.к. свойство и атрибут могут присутствовать в единственном экземпляре. Для обхода этой проблемы существуют методы addEventListener, removeEventListener

// ! elem.addEventListener(event, handler[, options]) - добавляет обработчик события к элементу (можно использовать несколько для одного элемента)
// ! event - тип события ("click", "submit" и т.п.)
// ! handler - ссылка на функцию-обработчик
// ! options - доп. объект со свойствами - once, capture, passive
// ! once: (true|false) - если true, обработчик будет удален после первого выполнения
// ! capture: (true|false) - фаза, на которой должен сработать обработчик (погружение или всплытие)
// ! passive: (true|false) - при true, указывает, что preventDefault() никогда не будет вызван

// ! elem.removeEventListener(event, handler[, options]) - удаляет обработчик события
// ! В метод для удаления нужно передать ТУ ЖЕ функцию, что была добавлена, т.е. если мы зададим функцию-обработчик прямо в addEventListener, то этот обработчик нельзя будет удалить, т.к. не будет ссылки на него, то бишь функцию нужно предварительно сохранить в переменной для возможности последующего удаления

// ! Нужно учесть, что существуют события, которые можно задать с помощью addEventListener, но нельзя при использовании HTML-атрибута или свойства DOM-элемента, например DOMContentLoaded(срабатывает, когда завершено построение DOM-а)

// ! В качестве первого аргумента функции-обработчику браузер передает объект event, содержащий координаты клика и многие другие свойства
// ! event.type - возвращает тип события("click" и т.п.)
// ! event.currentTarget - возвращает элемент, на котором сработал обработчик
// ! event.clientX, event.clientY - возвращают координаты курсора в момент события относительно окна (для событий мыши)

// ! Также в addEventListener можно передать объект-обработчик. В таком случае вызовется метод handleEvent объекта

// ! -------------- ВСПЛЫТИЕ И ПОГРУЖЕНИЕ --------------

// ! Всплытие - это когда при совершении события, обработчики сначала срабатывают на нем, потом на его родителе и т.д.
// ! Не все события всплывают (например, focus)
// ! event.target - возвращает "целевой" (т.е. самый глубокий) элемент, на котором сработало событие
// ! event.stopPropagation() - останавливает всплытие, но на текущем объекте все обработчики событий будут выполнены
// ! event.stopImmediatePropagation() - делает то же самое, но ещё и останавливает обработку событий на текущем объекте

// ! чтобы поймать событие на стадии погружения, нужно в последнем аргументе addEventListener передать {capture: true}

// ! -------------- ДЕЛЕГИРОВАНИЕ --------------

// ! Делегирование - прием, при котором вместо того, чтобы навешивать обработчик на каждый элемент, можно навесить один на родителя и обрабатывать в зависимости от event.target, это позволяет нам, например, при динамическом добавлении элементов в DOM не задавать для каждого обработчик

// ! -------------- ДЕЙСТВИЯ БРАУЗЕРА ПО УМОЛЧАНИЮ --------------

// ! Для отмены стандартного действия браузера существует метод event.preventDefault()
// ! Нужно учитывать, что некоторые события вытекают из других, например событие mousedown на input-поле вызывает событие focus, если отменить mousedown на поле, тогда пропадет возможность сфокусироваться на поле с помощью мыши

// ! опция passive: true для addEventListener передает браузеру, что preventDefault() никогда не будет вызван, это может быть полезно для событий по типу touchmove - чтобы позволить браузеру, не ожидая выполнения preventDefault(), начать прокрутку и избежать ненужных задержек
// ! Для touchmove passive: true по умолчанию в некоторых браузерах (Firefox, Chrome)

// ! event.defaultPrevented = (true|false) - свойство события, указывающее, было ли предотвращено стандартное поведение

// ! return false из обработчика работает только для событий, заданных через свойство или атрибут

// ! -------------- ГЕНЕРАЦИЯ ПОЛЬЗОВАТЕЛЬСКИХ СОБЫТИЙ --------------

// ! Помимо обработки событий, совершаемых в браузере, с помощью JS можно генерировать события прямо в коде

// ! Корневым классом событий является Event

// ! let event = new Event(type,[ options]) - создает СОБЫТИЕ, А НЕ СЛУШАТЕЛЬ СОБЫТИЯ. Это важно понимать
// ! type - тип события ("click" и т.п., в том числе придуманные нами события)
// ! options - объект с двумя необязательными свойствами: bubbles (всплывает событие или нет), cancelable (можно ли отменить действие по умолчанию)
// ! По умолчанию - оба false
// ! Также для конкретных типов событий могут быть заданы специфические параметры (например, clientX/clientY) для конструктора new MouseEvent

// ! elem.dispatchEvent(event) - запускает на элементе elem созданный нами event
// ! event.isTrusted = (true|false) - возвращает true для событий, вызванных пользователем, false для сгенерированных

// ! Для отслеживания собственных событий необходимо использовать addEventListener, т.к. свойства по типу onhello не сработают

// ! Для генерации пользовательских событий следует использовать new CustomEvent , он аналогичен new Event, за исключением того, что резервирует для options свойство detail, которое может содержать в принципе любые данные
// ! Следует заметить, что конструктор обычного Event будет игнорировать свойства, отличные от bubbles и cancelable, т.е. при попытке прочтения будет выдаваться undefined

// ! Вложенные события обрабатываются синхронно, т.е. если в обработчике события вызвать другое событие, то оно выполнится сразу

// ! При вызове event.preventDefault() для пользовательского события, elem.dispatchEvent(event) вернет false, тогда код, сгенерировавший событие узнает, что продолжать не нужно

// ! -------------- СОБЫТИЯ МЫШИ --------------

// ! События можно разделить на простые и комплексные

// ! Пример простых - mouseover, mousedown, mouseup
// ! Пример комплексных - click (последовательно mousedown и mouseup), dblclick
// ! Комплексные события состоят из простых

// ! Клик инициирует несколько событий: mousedown, mouseup, click. Именно в таком порядке

// ! event.which - возвращает код клавиши, над которой произошло событие (1 - лкм, 2 - скм, 3 - пкм)

// ! Также события мыши всегда содержат информацию о нажатых клавишах-модификаторах
// ! shiftKey (shift), altKey(alt), ctrlKey(ctrl), metaKey(cmd для Mac) (т.е. event.shiftKey вернет true или false, в зависимости от нажатия на клавишу)

// ! На MacOS cmd фактически является заменой ctrl в windows и linux
// ! Во многих случаях для совместимости в условиях стоит писать if (event.ctrlKey || event.metaKey)

// ! В событиях мыши присутствует информация о координатах
// ! event.clientX, event.clientY - положение курсора относительно окна
// ! event.pageX, event.pageY - относительно документа

// ! Событие copy срабатывает при попытке скопировать текст на странице

// ! По умолчанию событие mousedown начинает выделение текста. Его можно отменить через preventDefault(), если оно мешает или, если мы не хотим, чтобы пользователь имел возможность выделить текст

// ! -------------- ДВИЖЕНИЯ МЫШИ  --------------

// ! Событие mouseover срабатывает в момент, когда курсор оказывается над элементом
// ! Событие mouseout - когда курсор уходит из поля элемента

// ! У этих событий есть особое свойство relatedTarget (в дополнение к target и currentTarget)

// ! Для mouseover relatedTarget - элемент, с которого ушел курсор, target - целевой
// ! Для mouseout наоборот - relatedTarget - элемент, на который курсор перешел, target - с которого ушёл

// ! Нужно учитывать, что в некоторых случаях relatedTarget может быть равно null, например если мы только-только переместили курсор в окно браузера

// ! Событие mousemove происходит при движении мыши
// ! Оно может не зафиксироваться при слишком быстром движении мыши, т.к. mousemove происходит с некоторой периодичностью

// ! Но если на элементе зафиксировался mouseover, то обязательно произойдет mouseout

// ! События mouseover/mouseout всплывают, т.е. если на родителя повешены обработчики mouseover и mouseout , то при переходе на дочерний элемент сработает и mouseout(от родителя) и mouseover(на потомка)

// ! События mouseenter и mouseleave похожи на mouseover/mouseout , т.е. выполняют то же самое, но не всплывают и переход на дочерний элемент не будет считаться за уход с элемента
// ! Из-за того, что mouseenter/mouseleave не всплывают следует, что делегирование с этими событиями не сработает

// ! Если говорить просто, то если курсор появляется над элементом, причем неважно, над ним самим или над потомком - срабатывает mouseenter, когда курсор покидает элемент во внешнее пространство - срабатывает mouseleave

// let handler = (function() {
//   let isFreezed = false;
//   return function(evt) {
//     if (isFreezed) return;
//     console.log(evt.clientX, evt.clientY);
//     isFreezed = true;
//     setTimeout(()=> {
//       isFreezed = false;
//     }, 1000);
//   }
// }());

// document.addEventListener("mouseover", handler)
// document.addEventListener("mouseout", handler)
// document.addEventListener("mousemove", handler)
// ! Код выше выводит координаты курсора не чаще раза в секунду

// ! -------------- DRAG'N'DROP  --------------

// ! https://codepen.io/gukovskiy98/pen/ExPMNNy - в принципе хватит того, что я здесь написал, для понимания простого переноса внутри окна
// ! Суть - нужно обработать три события - mousedown, mousemove, mouseup и отменить ondragstart

// ! https://plnkr.co/edit/NwT1vb7rQJzCMkEz - перемещение элементов с делегированием и автопрокруткой страницы

// ! -------------- СОБЫТИЯ КЛАВИАТУРЫ  --------------

// ! Нужно учитывать, что ввод с клавиатуры не является единственно возможным, т.к. есть еще голосовой ввод и операции копировать/вставить. Поэтому отслеживание ввода исключительно с помощью событий клавиатуры не является верным. Для обработки любых изменений в input полях существует специальное событие input

// ! Событие keydown происходит при нажатии клавиши, keyup - при отпускании

// ! event.code - возвращает физический "код" клавиши
// ! event.key - возвращает символ
// ! Например при нажатии символа "d" на клавиатуре key = "d", code = "KeyD", а при нажатии "shift + d" key = "D", а code = "KeyD"
// ! То есть можно сделать вывод, что вне зависимости от регистра, code останется неизменным, а key будет меняться

// ! event.code не меняется от раскладки, т.е. фактически привязан к расположению клавиш на клавиатуре
// ! event.key меняется от раскладки, т.е. может быть и 'g' и 'п' и чем угодно ещё

// ! event.code может иметь значения: для буквенных клавиш - 'Key<латинскаябуква>', для цифр - 'Digit<число>', для спец. клавиш их имя - 'Enter', 'AltLeft', 'ShiftLeft', 'Tab' и т.п.

// ! event.code уточняет расположение клавиши (пример: 'ShiftLeft'), event.key - нет (пример: 'Shift')
// ! event.ctrlKey, event.metaKey, event.altKey - сообщают, были ли нажаты служебные клавиши ctrl, meta или alt

// ! При долгом нажатии клавиши происходит автоповтор, т.е. многократно происходит событие keydown
// ! Ситуация когда keydown много, а keyup всего один абсолютно нормальна

// ! event.repeat = true для событий, вызванных автоповтором, т.е. если долго жать на клавишу, то event.repeat при первом нажатии будет равен false, а дальше true

// ! Нажатия клавиш могут инициировать действия по умолчанию, например, появление символа при простом нажатии, удаление при нажатии на "delete", прокрутка страницы при нажатии "pageDown" или "end" и т.п.

// ! event.preventDefault() отменяет действие практически во всех сценариях, за исключением тех, которые инициированы системой (например, "alt+f4" закроет окно вне зависимости от того, что мы напишем в скрипте)

// ! Также существуют устаревшие события keypress, keyCode, charCode, which и т.д. Они всё ещё поддерживаются, но нет никакой необходимости их использовать

// ! В общем и целом, события клавиатуры имеет смысл использовать для того, чтобы отслеживать горячие клавиши, но не верификацию формы ввода, т.к. такая верификация будет ненадежной, да и для этого существует событие input

// ! Задача - выполнить функцию по нажатию на определенные клавиши
// ! Мое решение - https://codepen.io/gukovskiy98/pen/MWKRXzW?editors=1010
// ! Решение из учебника (красивее, но идея та же) - https://plnkr.co/edit/YyZwjbTSLklUmasY?p=preview&preview

// ! -------------- SCROLL  --------------

// ! scroll - событие, реагирующее на прокрутку. Работает на объекте window и на прочих прокручиваемых элементах.

// ! preventDefault для события прокрутки не сработает, но можно preventDefault навесить на событие keydown для клавиш pageDown, pageUp

// ! -------------- ФОРМЫ ----------------

// ! Все формы в документе входят в специальную коллекцию document.forms

// ! Для доступа к определенной форме можно использовать как индекс (document.forms[0]), так и имя - атрибут name формы (document.forms.orderform)
// ! К элементам формы (input, textarea и т.п. полям) можно получить доступ через form.elements[name] или по индексу
// ! Если в форме несколько элементов с одинаковым свойством name, то form.elements[name] вернет коллекцию
// ! Дочерние элементы fieldset также поддерживают свойство elements

// ! Также можно использовать form[name]/form[index] вместо form.elements[name] , но нужно учитывать, что при изменении свойства name элемент будет доступен и со старым, и с новым именем при использовании form[name]. Если использовать form.elements[name], то доступ к элементу можно получить только с актуальным именем

// ! В свою очередь можно получить доступ к форме из элемента с помощью element.form

// ! Для получения значений формы можно использовать element.value / element.checked(для чекбоксов и радиокнопок)
// ! Для textarea element.innerHTML вернет текст внутри поля, который изначально был на странице

// ! Методы для селекта
// ! select.options - возвращает коллекцию подэлементов option
// ! select.value - текущее значение option
// ! select.selectedIndex - номер выбранного option

// ! Чтобы задать выбранное поле селекта, можно:
// ! 1. Для опции установить свойство selected в true select.options[2].selected
// ! 2. Для select.value задать значение опции
// ! 3. Для select.selectedIndex задать номер опции

// ! Если для селекта свойство multiple равно true, т.е. дана возможность задавать несколько выбранных опций, то можно использовать только первый способ (задание свойства)

// ! Для создания элемента option существует конструктор Option
// ! new Option(text, value, defaultSelected, selected)
// ! text - текст внутри опции
// ! value - значение (атрибут value)
// ! defaultSelected - при true ставится HTML-атрибут selected (т.е. по факту устанавливается факт, что опция является ДЕФОЛТНОЙ по умолчанию, но еще не значит что оно выбрано в данный момент)
// ! selected - при true свойство selected становится true (т.е. записывается текущее состояние)
