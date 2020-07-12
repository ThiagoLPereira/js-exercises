/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];
function longNameThatStartsWithA(array) {
  var newArray = array.find(element => element[0] === "A" && element.lengh > 7);
  return newArray;
}
console.log(longNameThatStartsWithA(names));

/* EXPECTED OUTPUT */
// "Alexandra"
