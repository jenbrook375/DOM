// array of fruits
var fruits = [ 'apple', 'banana', 'orange', 'kiwi', 'pineapple'];
/* console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); */
fruits.push('strawberry');

// for loop
/* for (var i = 0; i < fruits.length; i++){
    console.log(i);
    console.log(fruits[i]);
} */

// do while
var index = 0;
/* do {
    console.log(fruits[index]);
    index++;
} while (index < fruits.length); */

// while
/* while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
} */

// for in
fruits.foo = 'test';
for (var i in fruits) {
    console.log(i);
}

// for of
for (var i of fruits) {
    console.log(i);
}