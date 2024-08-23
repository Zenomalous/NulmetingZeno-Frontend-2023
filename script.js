'use strict'

function reverseString(str) {
    return str.split('').reverse().join('');
}

let myReversedName = "drahciRelttiL"; 
let myActualName = reverseString(myReversedName);
console.log(myActualName);