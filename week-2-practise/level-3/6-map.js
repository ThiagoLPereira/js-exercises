// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str.trim().toLowerCase().replace("/", "");
}

function captialise(str) {
  var letterList = str.split("");
  letterList[0] = letterList[0].toUpperCase();
  var output = letterList.join("");
  return output; // complete this function
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidyAndCapitalised;

console.log(captialise("antonio"));

console.log(captialise("Antonio"));
var mentorsTidy0 = mentors.maps(tidyUpString);
var mentorsTidyAndCapitalised;

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
