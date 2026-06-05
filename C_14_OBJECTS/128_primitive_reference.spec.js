// Primitive vs Reference Types
// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function


//primitive type - cant change the original variable's value
let a = 10;
let b = a;
b = 99;
console.log(a);

//reference type - changes the original variable's value    // by-copy-byreference
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);