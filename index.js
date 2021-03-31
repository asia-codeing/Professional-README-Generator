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
    message: 'Describe the installation process if any:',
    validate: function(input) {
        if (input.length < 1) {
            return console.log('If you dont have installation process plese enter NAN');
        } else {
            return true;
        }
    }  
},
//----- Usage
{

    type: 'input',
    name: 'usage',
    message: 'What is this project usage for? Provide instructions and examples of your project Usage.',
    validate: function(input) {
        if (input.length < 1) {
            return console.log("You didn't enter the usage");
        } else {
            return true;
        }
    }  
},
//------ Credits
{

    type: 'input',
    name: 'credits',
    message:"If applicable, provide any credits for your application" 
}
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
