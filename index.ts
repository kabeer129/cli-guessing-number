#! /usr/bin/env node

import inquirer from "inquirer";

const randomnumber =Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
{
    name:"userguessednumber",
    type:"number",
    message:"please guess a number between 1 to 6:",
},

]);
if (answer.userguessednumber === randomnumber){
    console.log("congratulation! you guess a right number");
}
else{
    console.log("you guess a wrong number");
}