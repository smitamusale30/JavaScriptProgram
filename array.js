/** multiline comment */
//Array

const number=new Array(1,2,3,4,5,6);
const fruit=['apple','orange','pears',33]
console.log(fruit);

console.log(fruit[2]);

fruit[4]='grapes';
console.log(fruit);

fruit.push('mango');
console.log(fruit);

fruit.unshift('strawberries');
console.log(fruit);

fruit.pop();
console.log(fruit);

console.log(Array.isArray('hello'));
console.log(Array.isArray(fruit));

console.log(fruit.indexOf('strawberries'));