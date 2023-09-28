// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input

function runInquirerPrompts(){
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'repositoryName',
        message: 'Enter the name of your repository:',
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Enter a table of contents:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your repository:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this useful for:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Enter the license for your repository:',
      },
      {
        type: 'list',
        name: 'licenseType',
        message: 'Choose a license for your repository:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
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
  runInquirerPrompts();


// TODO: Create a function to initialize app



// Function to generate the README content
function generateREADME(answers) {
  // Create the README content as a string
  const licenseBadge = generateLicenseBadge(answers.license);
  const licenseNotice = generateLicenseNotice(answers.license);
  
  const readmeContent = `

${licenseBadge}

## Description
${answers.description}

## Table of contents
${answers.tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}
${licenseNotice}

## License Type
${answers.licenseType}

##GitHub
${answers.githubUsername}
`;
return readmeContent;
}


function generateLicenseBadge(license) {
  // Generate a license badge based on the selected license
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'None':
      return ''; 
    default:
      return '';
  }
}

function generateLicenseNotice(license) {
  switch (license) {
    case 'MIT':
      return 'This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.';
    case 'Apache 2.0':
      return 'This project is licensed under the Apache License 2.0 - see the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0) for details.';
    case 'GNU GPLv3':
      return 'This project is licensed under the GNU General Public License v3.0 - see the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0) for details.';
    case 'ISC':
      return 'This project is licensed under the ISC License - see the [ISC License](https://opensource.org/licenses/ISC) for details.';
    case 'None':
      return 'This project has no specified license.';
    default:
      return '';
  }
}

function writeREADME(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log('README.md file generated successfully.');
    }
  });
}

function generateQuestionsSection(githubUsername) {
  // Generate the "Questions" section with the GitHub username and link
  if (githubUsername) {
    const githubProfileLink = `https://github.com/RG-GitUser/Professional-README-Generator/${githubUsername}`;
    return `
## Questions
If any questions, feel free to reach out!

GitHub: [${githubUsername}](${githubProfileLink})
`;
  } else {
    return ''; // If no GitHub username provided, don't include the section
  }
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

