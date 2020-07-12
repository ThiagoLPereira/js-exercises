var numberOfStudents = 15;
var numberOfMentors = 8;
var porcentage = 100;
var total = numberOfMentors + numberOfStudents; //23

var studentsPor = numberOfStudents * porcentage; // 1500
var studentsTotal = Math.round(studentsPor / total); // 65%

var mentorsPor = numberOfMentors * porcentage; // 800
var mentorsTotal = Math.round(mentorsPor / total); //35%

var students = "Percentage students: ";
var mentors = "Percentage mentors: ";

console.log(students + studentsTotal);
console.log(mentors + mentorsTotal);
