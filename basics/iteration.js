// for-of loop , it will iterate each index value diectly
// works like for-each in java

let str = "biswajit";
for (let val of str) {
    console.log("str =",val);
}

// for-in loop

let student ={
    name: "Biswajit",
    age:25,
    cgpa:8.1,
    isPass:true,
};

for(let key in student){
    console.log("key =",key," value",student[key]);
}