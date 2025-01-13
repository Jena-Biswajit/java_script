// strings are immutable in java this means original string will never change
// if we want to change original string then we need to create a new one
let str = "abd";
let newStr=str.toUpperCase(); // convert string to uppercase chaacter
console.log(newStr);
let newLowecase=str.toLowerCase();// convert string to lowercase chaacter
console.log(newLowecase);

// trim or remove whitespaces from beggeing and closing of strings

let name = "    biswajit jena    ";
console.log(name.trim());

// search character in string through index by chatAt()

let person = "biswajit jena";
console.log(person.charAt(9));

//replace character in string using replace()

let replace = "biswajit";
console.log(replace.replace("b","s"));