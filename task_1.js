/* Задание №1
Реализовать функцию groupBy на чистом JS, которая будет группировать массив по определённой функции, переданной вторым аргументом:
*/

const groupBy = (array, func) => {
    const sortedArray = [...array].sort((a, b) => {
        const val_a = func(a);
        const val_b = func(b);
        if (val_a === val_b) return a - b;
        return val_a - val_b;
    });
    return sortedArray.reduce((r, item) => {
        const key = func(item).toString();
        r[key] ? r[key].push(item) : r[key] = [item];
        return r;
    }, {});
}

console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)) // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }
console.log(groupBy([10, 3.7, 3.6, 6.4, 8.9], Math.floor)) // { '3': [ 3.6, 3.7 ], '6': [ 6.4 ], '8': [ 8.9 ], '10': [ 10 ] }
