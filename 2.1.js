//Fallait faire avec une page html mais je voulais tester ça
//Ca fonctionne en lançant dans la console bash avec Node
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput = 0;
rl.question("What is your age\n", function (int) {
  userInput = int;
  
  if( userInput >= 18){
    console.log("You are an adult");
  } else{
    console.log("You are not yet an adult")
  }
  rl.close();
});