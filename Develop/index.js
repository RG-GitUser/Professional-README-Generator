// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter project title:',

  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description',

  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Explain how to use your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Explain how others can contribute to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide testing instructions:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];
  


// TODO: Create a function to write README file


// TODO: Create a function to initialize app

// Function call to initialize app

