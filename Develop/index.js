// TODO: Include packages needed for this application

const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

function promptForRepoInfo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'repositoryName',
        message: 'Enter the name of your repository:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your repository:',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Enter the author or owner of the repository:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Enter the license for your repository:',
      },
    ])
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeREADME('README.md', readmeContent);
      console.log('README.md file generated successfully.');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Call the function to start prompting for information
promptForRepoInfo();


// TODO: Create a function to initialize app

const fs = require('fs');

// Function to generate the README content
function generateREADME(answers) {
  // Create the README content as a string
  const readmeContent = `
# ${answers.title}


## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}
`;
}


function writeREADME(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    }
  });
}

// Function to write README file
// function writeREADME(filename, content) {
//   fs.writeFile(filename, content, (err) => {
//     if (err) {
//       console.error('Error writing README file:', err);
//     } else {
//       console.log('README file generated successfully.');
//     }
//   });
// }

// // Function to initialize the application
// function initializeApp() {
//   // Define your array of questions here (as shown in previous examples)

//   // Prompt the user for input
//   inquirer
//     .prompt(questions)
//     .then((answers) => {
//       const readmeContent = generateREADME(answers);

//       // Write the README.md file
//       writeREADME('README.md', readmeContent);
//     });
// }

// // Call the initializeApp function to start the application
// initializeApp();



// // Function call to initialize app

