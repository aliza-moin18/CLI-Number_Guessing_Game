#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6+ 1);
console.log(randomNumber);

const answers = await inquirer .prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please guess a number between 1-6:", 
    },
]);

if(answers.userGussedNumber === randomNumber) {    
      console.log("Congratulation! you guessed right number.");
}else {
    console.log("you guesssed wrong number");
}