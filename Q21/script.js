console.log("JavaScript program to get the length of a JavaScript object");
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
function find_length(student) {
    // console.log(Object.keys(student));
    objectLength = Object.keys(student).length;
    console.log(objectLength);
}
find_length(student)
