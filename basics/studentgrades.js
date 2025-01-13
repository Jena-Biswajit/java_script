let score = prompt("enter score of student");

if (score >= 80 && score <= 100) {
    console.log(score, "the grade of the student is A");
}
else if (score >= 70 && score <= 89) {
    console.log(score, "the grade of the student is B");
}
else if (score >= 70 && score <= 89) {
    console.log(score, "the grade of the student is B");
}

else if (score >= 60 && score <= 69) {
    console.log(score, "the grade of the student is C");
}

else if (score >= 50 && score <= 59) {
    console.log(score, "the grade of the student is D");
}

else if (score >= 0 && score <= 59) {
    console.log(score, "the grade of the student is f");
}

else {
    console.log(score, "entered wrong input");
}