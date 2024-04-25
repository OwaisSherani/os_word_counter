#! usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: 'Enter your sentence to count the word:'
    }
]);
// to remove whitespace
const words = answers.sentence.trim().split(' ');
// print array of words
console.log(words);
//print the word count
console.log(`Your sentence word count is : ${words.length}`);
