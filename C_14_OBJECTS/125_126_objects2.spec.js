// objects is different from JSON
// objects uses the key in normal and value in strings.. whereas JSON uses both key and value in strings..

// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

//JSON
// Key will not be in the double quotes

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

//

let b = a;              //copying the whole object from a to b.. so changes //copy-by-reference
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };     //creating two references seperately so no changes / same values.
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
};

if (c === d) {
    console.log("true");
} else {
    console.log("false");
};