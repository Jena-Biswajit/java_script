// take input from user and check if that is multiplication of 5 or not

// alert("enter number to check factor of 5 ");
let num = prompt("enter number to check factor of 5");

if (num % 5 == 0) {
    alert("the number is multiplication of 5");
    console.log(num,"is a multiple of 5");
}
else {
    alert("the number is not multiplication of 5");
    console.log(num,"is not a multiple of 5");
}