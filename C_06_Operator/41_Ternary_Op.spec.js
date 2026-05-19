let a = 24;
let b = 48;
let c = 72;

//ternary OP
maxNo = a > b ? "24" : "48";
console.log(maxNo);

//nested ternary OP
maxNo2 = a > b ? "24" : (b > c ? "48" : "72");
//here the nesting ternary continuation is going from false/else condition 
console.log(maxNo2);