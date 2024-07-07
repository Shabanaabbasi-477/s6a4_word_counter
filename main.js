#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// import inquirer and chalk
//create a colorfull wel come message
console.log(chalk.magentaBright("=".repeat(60)));
console.log(chalk.bold.magentaBright("\t WELL COME TO WORD COUNTER APP"));
console.log(chalk.magentaBright("=".repeat(60)));
//user se input leny k liy aik object bnaya hy
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.bold.blueBright(" Enter a Sentence : \n")),
    }
]);
// trim method sentence me se white spaces ko remove kry ga
//split method space k bd any waly har word ko alag alag kr aik array me save kry ga
let words = answers.sentence.trim().split(" ");
console.log(chalk.bold(chalk.bold.blueBright("\n Words Of The Sentence : \n")));
console.log(words);
console.log(chalk.bold.blueBright `\n Total Word Count : ${words.length}`);
