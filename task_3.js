/*Задание №3
Реализовать функцию checkParentheses на чистом JS, которая проверяет на синтаксическую верность последовательность скобок ( (), {} и [] ). Функция возвразает false, если переданная строка содержит неправильную последовательность:
*/

const map = {
    ")": "(",
    "}": "{",
    "]": "[",
};

const checkParentheses = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/\(|\{|\[/.test(char)) stack.push(char);
        else if (/\)|\}|\]/.test(char)) {
            const prev = stack.splice(-1)[0];
            if (prev !== map[char]) return false;
        }
    }
    return !stack.length;
}

console.log(checkParentheses('--()--')) // true
console.log(checkParentheses('-a]--[')) // false
console.log(checkParentheses('dsa{vsfs{ad')) // false
console.log(checkParentheses('j78(g5b]uyg')) // false
console.log(checkParentheses(',m{i987y}hj')) // true
console.log(checkParentheses('dsa[3ed---:]::')) // true
