function stringReverse(str){
  var splitString = str.split("");

  var reverseString= splitString.reverse();

  var joinString = reverseString.join("");

  return joinString;
}

console.log(stringReverse("Hello"));



//Method-2- simililar but with chaining

function stringReverse1(str){
   return str.split("").reverse().join("");
}

console.log(stringReverse1("Hello World"));