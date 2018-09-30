module.exports = function(содержимое) {
  console.log(JSON.stringify(содержимое) );  
  [
    [/внимание\s*\(/g, 'alert('],                        // alert
    [/консоль\./g, 'console.'],                          // console
    [/console\.(логировать|лог)\s*\(/g, 'console.log('], // log
    [/стоп(;|\s+)/g, 'break$1'],                         // break
    [/случай\s+/g, 'case '],                             // case
    [/класс\s+/g, 'class '],                             // class
    [/\s\s\r\n/g, '}'],                              // }
    [/\s\r\n/g, '{'],                                 // {
    [/правда\s+/g, 'true'],                              // true 
    [/ложь\s+/g, 'false'],                               // false
    [/конструктор\s*\(/g, 'constructor('],               // constructor
    [/получить\s+/g, 'get '],                            // get
    [/записать\s+/g, 'set '],                            // set
    [/поймать\s*\(/g, 'catch('],                         // catch
    [/(константа|конст)\s+/g, 'const '],                 // const
    [/продолжить(;|\s+)/g, 'continue$1'],                // continue
    [/поумолчанию\s*:/g, 'default:'],                    // default
    [/удалить\s+/g, 'delete '],                          // delete
    [/сделай(\s*{|\s+)/g, 'do$1'],                       // do
    [/иначе(\s+|\{)/g, 'else$1'],                        // else
    [/экспортировать\s+/g, 'export '],                   // export
    [/\s+расширяет\s+/g, ' extends '],                   // extends
    [/вконце(\s+|\{)/g, 'finally$1'],                    // finally
    [/цикл(\s*\()/g, 'for ('],                           // for
    [/функция(\s+|\()/g, 'function$1'],                  // function
    [/если\s*\(/g, 'if ('],                              // if
    [/импортировать\s+/g, 'import '],                    // import
    [/\s+в\s+/g, ' in '],                                // in
    [/\s+экземпляр(\s+|\()/g, ' instanceof$1'],          // instanceof
    [/пусть\s+/g, 'let '],                               // let
    [/новый\s+/g, 'new '],                               // new
    [/\s+из\s+/g, ' of '],                               // of
    [/вернуть\s+/g, 'return '],                          // return
    [/супер\s*\(/g, 'super('],                           // super
    [/перебрать\s*\(/g, 'switch ('],                     // switch
    [/тут|этот/g, ' this'],                              // this
    [/бросить|кинуть\s+/g, 'throw '],                    // throw
    [/попробовать(\s+|\s*{)/g, 'try$1'],                 // try
    [/тип(\s+|\s*\()/g, 'typeof$1'],                     // typeof
    [/пер(еменная)?\s+/g, 'var '],                       // var
    [/пусто\s*\(/g, 'void('],                            // void
    [/пока(мест)\s*\(/g, 'while ('],                     // while
    [/совместно\s*\(/g, 'with ('],                       // with
    [/уступить\s+/g, 'yield '],                          // yield
    [/\.сократить|вынуть\(\)/g, '.pop()'],               // pop
    [/\.добавить|сунуть\(/g, '.push('],                  // push
    [/\.отразить|развернуть\(\)/g, '.reverse()'],        // reverse
    [/\.сдвинуть\(\)/g, '.shift()'],                     // shift
    [/\.сортировать\(/g, '.sort('],                      // sort
    [/\.соединить\(/g, '.splice('],                      // splice
    [/\.раздвинуть\(/g, '.unshift('],                    // unshift
    [/\.связать|склеить\(/g, '.concat('],                // concat
    [/\.срез\(/g, '.slice('],                            // slice
    [/\.в(c|С)троку\(\)/g, '.toSrtring()'],              // toString
    [/\.номер(В|в)\(/g, '.indexOf('],                    // indexOf
    [/\.для(К|к)аждого\(/g, '.forEach('],                // forEach
    [/\.каждый\(/g, '.every('],                          // every
    [/\.хоть(О|о)дин\(/g, '.some('],                     // some
    [/\.фильтр(овать)\(/g, '.filter('],                  // filter
    [/\.карта\(/g, '.map('],                             // map
    [/\.свести\(/g, '.reduce('],                         // reduce
    [/\.прототип(\.|\s+)/g, '.prototype$1'],             // prototype
    [/\.длина/g, '.length'],                             // length
    [/\.разбить\(/g, '.split('],                         // split
    [/\.собрать\(/g, '.join('],                          // join
    [/{/g, '{\n'],
    [/}/g, '\n}']  
  ].forEach(function(англ) {
   
    содержимое = содержимое.replace(англ[0], англ[1]);
  });
    console.log(JSON.stringify(содержимое) )
    console.log(содержимое )
  return содержимое;
}
