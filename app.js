var tableValue = +prompt("Enter table value");
var startValue = +prompt("Enter start value");
var endValue = +prompt("Enter end value");

for (let i = startValue; i <= endValue; i++){
    document.write(tableValue + " X " + i + "=" + tableValue*i + "<br>")
}
let nameOfStudents = ["Shahrukh","Waseem","Abdullah","Sami","Ismail","Faizan"]
document.write(nameOfStudents + "<br>");
nameOfStudents.push("Karim");
document.write(nameOfStudents + "<br>");
nameOfStudents.pop();
nameOfStudents.pop();
document.write(nameOfStudents);
nameOfStudents.unshift("<br>" + "Ahmed","Farhan","Qasim");
document.write(nameOfStudents + "<br>");
nameOfStudents.shift();
nameOfStudents.shift();
document.write(nameOfStudents);

let result = nameOfStudents.indexOf("Waseem")
console.log(result);
nameOfStudents.splice(2,2,"Khurram","Naveed","Farrukh");
document.write("<br>" + nameOfStudents);
let result2 = nameOfStudents.indexOf("Farrukh")
console.log(result2);
let passStudents = nameOfStudents.slice(4,7)
document.write("<br>" + passStudents);
let mergeStudents = passStudents.concat(nameOfStudents);
document.write("<br>" + mergeStudents);
mergeStudents.sort();
document.write("<br>" + mergeStudents)
let enterFindStudent = prompt("Enter your name");
let findStudent = mergeStudents.includes(enterFindStudent);
document.write("<br>" + "<br>" + findStudent);






