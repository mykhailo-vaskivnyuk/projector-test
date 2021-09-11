/* Задание №2
Реализовать функцию invert на чистом JS, которая будет менять ключи и значения объектов местами:
*/

const invert = (obj) => Object.keys(obj).reduce((r, key) => (r[obj[key].toString()] = key) && r, {});

console.log(invert({ 'a': 'some', 'b': 'object', 'c': 1 })) // { 'some': 'a', 'object': 'b', '1': 'c' }
console.log(invert({ 'b': 'object', 'c': 1, 'a': 'some' })) // { 'some': 'a', 'object': 'b', '1': 'c' }
