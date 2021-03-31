// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
 
// TODO: Create an array of questions for user input
const questions = [
//---Project Title
{
    type: 'input',
    name: 'title',
    message: 'What is the project name? (Required)',
    validate: function(input) {
        if (input.length < 1) {
            return console.log('You need to enter a title to continue!');
        } else {
            return true;
        }
    }  
},
//---Description
{

    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: function(input) {
        if (input.length < 1) {
            return console.log('You need to enter a Description to continue!');
        } else {
            return true;
        }
    }  
},
//----- Installation
{

    type: 'input',
    name: 'installation',
    message: 'How do you install the project? (Required)',
    validate: function(input) {
        if (input.length < 1) {
            return console.log('You need to provide installation info to continue!');
        } else {
            return true;
        }
    }  
},
//----- Usage
{

    type: 'input',
    name: 'usage',
    message: 'List the steps of how to use this application',
    validate: function(input) {
        if (input.length < 1) {
            return console.log('You need to provide using steps info to continue!');
        } else {
            return true;
        }
    }  
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
     error ? console.log(error) : console.log('Success! Information transferred to the README!'));
    
}

// TODO: Create a function to initialize app
//function init() {}
// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
