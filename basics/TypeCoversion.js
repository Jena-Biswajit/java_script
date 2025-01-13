let score = "33sdfds"
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber);

let score1= null
console.log(score1);

let score2= undefined
console.log(score2);

// "33"=> 33
// "33sdfds"=>NaN(not a number)


let value = 3
let negvalue = -value

console.log(negvalue);

// string concatenation

let name = "biswajit"
let surName = "Jena"

let fullName = name + surName
console.log(fullName);
console.log("1"+1+"1"); // here compiler will understand whole thing is string
console.log("1"+1+1);  // similarly here as well as above
console.log(1+1+"1"); // but here it will take 1st two as number and last one only as string
// but this is not a good practice of code writing