# pycckuu-loader

Loader для Webpack для руссификации JavaScript. Позволяет заменить английские ключевые слова на русские.   
#### Как установить
1. `npm i --save-dev https://github.com/speaker73/pycckuu-loader.git`
2. Смотри - **Пример конфигурация webpack.config.js**
#### Такой код:
```javascript
константа сотрудники = ['Владимир', 'Дмитрий', 'Николай']
константа приветствовать = функция(имя) 
    консоль.логировать('Привет ' + имя + '!')  

цикл(пусть и=0; и<сотрудники.длина; и++) 
    приветствовать(сотрудники[и])  

```
#### Будет транслирован в:
```javascript
const сотрудники = ['Владимир', 'Дмитрий', 'Николай']
const приветствовать = function(имя){
    console.log('Привет ' + имя + '!')
}
for (let и=0; и<сотрудники.length; и++){
    приветствовать(сотрудники[и])
}
```

#### Пример конфигурация webpack.config.js:
```javascript
module.exports = {
    mode:'none',
    entry: "./индекс.яс",
    output: {
        path: __dirname,
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.яс$/,
                use: [
                /*{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                },*/
                {
                    loader: "pycckuu"
                }
                ]
            }
        ]
    },
    optimization: {
        minimize: false
    }

};
```

#### Таблица соответствий:   

Английское значение | Русское значение
------------ | -------------
{ | \s\r\n
} | \s\s\r\n
true | правда
false | ложь
get | получить
set | записать
constructor | конструктор
split | разбить
alert | внимание
console | консоль
log | логировать
break | стоп
case | случай
class | класс
catch | поймать
const | константа
continue | продолжить
default | поумолчанию
delete | удалить
do | сделай
else | иначе
export | экспортировать
extends | расширяет
finally | вконце
for | цикл
function | функция
if | если
import | импортировать
 in  |  в 
instanceof | экземпляр
let | пусть
new | новый
 of  |  из 
return | вернуть
super | супер
switch | перебрать
this | тут
throw | бросить
try | попробовать
typeof( | тип(
var  | пер 
void | пусто
while | пока
with | совместно
yield | уступить
pop | вынуть
push | впихнуть
reverse | отразить
shift | сдвинуть
sort | сортировать
splice | соединить
unshift | раздвинуть
concat | связать
join | объединить 
slice | часть
toString | вСтроку
indexOf | номерВ
forEach | дляКаждого
every | каждый
some | хотьОдин
filter | фильтр
map | карта
reduce | уменьшить
prototype | прототип
length   | длина


