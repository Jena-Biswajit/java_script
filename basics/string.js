// string
let name = "biswajit";

for(let i=0;i<name.length;i++){
    console.log(name[i]);
}

// templete literals in js
// the way to have embedded expression in strings
let specialString = `this is a template literal`;
console.log(specialString);

let obj={
  item:"bat",
  price:2500,
};

let op = `the cost of bat is ${obj.item} is ${obj.price}`;
console.log(op);

// String Interpolation
// to create strings by doing substitution of placeholders

let stringInterpolation = `sting text ${1+2+3} string text`;
console.log(stringInterpolation);

console.log("biswajit\tjena");
let len = "biswajit\tjena";
console.log(len.length);