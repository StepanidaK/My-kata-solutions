// Given a string, you have to return a string 
// in which each character (case-sensitive) is repeated once.

// My solution

function doubleChar(str) {
    return str.split("").map(el => el+el).join("")
  }




