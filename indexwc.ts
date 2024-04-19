#! /usr/bin/env node

// Coding Night 9 online, project Word Counter
// coding by Naushad Hussain class (Sunday 9-12), focus2learn

// import packages

import inquirer from "inquirer";
import chalk from "chalk";

// Assign Counter Variable Count without white spaces

let cwows = 0


console.clear()

// Assign Constant Object variable to get input from user

const wordcount : {

   sentence : string

} = await inquirer.prompt(
    {
        name : "sentence",
        type : "input",
        message : chalk.blue("\n\n\t\t Type your Text to Count Words...."),

    }
);

// Assigne Constant variable to store manipulated / processed data

let wordcount2 = wordcount.sentence.trim().split(" ")

// loop for , to count Array words's Characters

for( let i = 0; i < wordcount2.length;i++)
    {
        cwows = cwows + wordcount2[i].length
    }


// Display Original Text Data whatever User given Input

console.clear()

console.log(chalk.yellow("\n\n\n\t\t------------------------ WORD COUNT-------------------------"))

console.log(chalk.green("\n\n\t\tOriginal Text........ :  ")+chalk.yellow(wordcount.sentence));


// Display Trimed and Splited data from user input

console.log(chalk.green("\n\n\t\tText as Array........ :  ")+chalk.yellow(wordcount2));
console.log(chalk.green("\n\n\t\tWord(s) Count........ :  ")+chalk.yellow(wordcount2.length));
console.log(chalk.green("\n\n\t\tCharacter(s) Count... :  ")+chalk.yellow(wordcount.sentence.split("").length)+"   With White-Spaces");
console.log(chalk.green("\n\n\t\tCharacter(s) Count... :  ")+chalk.yellow(cwows)+"   Without White-Spaces");
console.log(chalk.yellow("\n\n\n\t\t------------------------ focus2learn-------------------------"))


// End of coding......... focus2learn ...............
