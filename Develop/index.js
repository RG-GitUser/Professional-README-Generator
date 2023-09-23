// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input


const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your project name: ', (projectName) => {
  const template = `# ${projectName}\n\n## Description\n\n[Description of your project]\n\n## Installation\n\n[Installation instructions]\n\n## Usage\n\n[Usage instructions]\n`;

  fs.writeFileSync('README.md', template, 'utf8');
  console.log('README.md file created successfully.');
  rl.close();
});


// TODO: Create a function to write README file


// TODO: Create a function to initialize app

// Function call to initialize app

