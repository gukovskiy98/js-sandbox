// ! ------------ ОСНОВЫ NODEJS ----------------

// ! Команда node в терминале запускает интерактивную среду (REPL), в которой можно исполнять js код

// ! npm init создаёт package.json

// ! npm install(или просто i) <имя пакета> устанавливает пакет из npm и добавляет его в раздел dependencies в package.json
// ! npm install <имя пакета> -D устанавливает пакет и добавлает его в devDependencies
// ! npm install без параметров устанавливает все пакеты, указанные в package.json

// ! dependencies - раздел с указанием пакетов, которые необходимы для работы приложения
// ! devDependencies - раздел с пакетами, требуемыми для разработки

const chalk = require("chalk");
const helloWorldModule = require("./module1"); // подключаем пользовательский модуль
console.log(chalk.green("Hello world")); // Выведет Hello world зеленого цвета
helloWorldModule(); // Выведет Hello world

const isOdd = require("is-odd");
const isEven = require("is-even");
console.log(isOdd(5));
console.log(isEven(5));

console.log(__dirname, __filename);

// ! Функция require используется для загрузки модуля, если указать только название, то загрузится либо встроенный модуль, если таковой имеется, либо модуль из node_modules
// ! Также в качестве модуля можно подключить целую папку, тогда первым запущенным файлом будет тот, который указан как main в package.json, либо index.js, index.node
// ! require.resolve(<имя модуля>) - возвращает полный путь до модуля

// ! Для экспорта функции, объекта и т.п. в виде модуля используется module.exports
// ! В module.exports можно записать что угодно, по умолчанию он объект и мы можем возвращать что-то из модуля с помощью полей module.exports[<имя>]. Тогда вернется объект в котором одним из полей будет указанная переменная

// ! Сколько бы раз не подключался модуль с помощью require, он кэшируется, следовательно код исполнится один раз
// ! delete require.cache[модуль] - удаляет модуль из кэша

// ! __dirname - возвращает абсолютный путь в виде строки
// ! __filename - возвращает имя файла (и директорию)

// ! ------------- ВСТРОЕННЫЕ МОДУЛИ --------------

// ! PATH - для работы с путями

const path = require("path");
console.log(path.dirname(__filename)); // возвращает директорию файла/папки, принимает строку
console.log(path.basename(__filename)); // возвращает имя файла/папки, принимает строку
console.log(path.extname(__filename)); // возвращает расширение файла
console.log(path.parse(__filename)); // возвращает объект с ключами: root, dir - директория, base - имя с расширением, ext - расширение файла, name - имя файла
console.log(path.join(__dirname, "new.js")); // создаёт директорию из набора строк

// ! FS - для работы с файлами

// ! Для многих методов существуют sync - синхронные версии (mkdirSync) и асинхронные (mkdir)
// ! Асинхронные лучше подойдут, если мы не хотим блокировать поток

const fs = require("fs");

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) throw err;
//   console.log('Папка создана!');
// })

// ! fs.mkdir создаёт директорию, принимает путь в виде строки, объект с опциями(необязательно) и колбэк, где первый параметр - объект ошибки
// ! Ошибка возникнет, если мы попытаемся создать уже существующую директорию

// fs.writeFile(path.join(__dirname, "test.txt"), "hello world", (err) => {
//   if (err) {
//     throw err;
//   }
// });
// ! fs.writeFile создаёт файл и записывает в него данные. Первый параметр - путь, второй - строка, третий - колбэк с объектом ошибки
// ! Ошибки не будет, если перезаписать уже существующий файл

// ! fs.appendFile добавляет строки к файлу, а не перезаписывает его. Параметры те же самые

// fs.readFile(path.join(__dirname, 'git.js'), 'utf-8', (err, content) => {
//   if (err) {
//     throw err;
//   }
//   // const data = Buffer.from(content);
//   // console.log(data.toString());
//   // ^ если не указываем кодировку вторым параметром readFile, считываем буфер и преобразовываем к строке
//   console.log(content)
//   console.log('Файл прочтён');
// })

// ! OS - для получения информации об операционной системе

const os = require("os");

console.log(os.platform()); // операционная система (выведет win32)
console.log(os.cpus()); // информация о процессорах
console.log(os.arch()); // архитектура (выведет x64)
console.log(os.freemem()); // количество свободной памяти
console.log(os.totalmem()); // памяти всего
console.log(os.type()); // имя операционной системы (выведет Windows_NT)
console.log(os.uptime()); // время с момента включения в секундах
console.log(os.homedir()); // домашняя директория (выведет C:\Users\Professional)

// ! Events - события
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("anything", (data) => {
  console.log(`ON: abything`, data);
});

emitter.emit("anything", { a: 1 });
