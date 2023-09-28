
const inquirer = require('inquirer');
const fs = require('fs');




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
      {
        type: 'input',
        name: 'githubLink',
        message: 'Enter your GitHub profile link:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
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

  runInquirerPrompts();


// Function to generate the README content
function generateREADME(answers) {

  const licenseBadge = generateLicenseBadge(answers.license);
  const licenseNotice = generateLicenseNotice(answers.license);
  
  const readmeContent = `

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Table of contents
${answers.tableOfContents}

## Installation
${answers.installation} <a name="installation"></a>

## Usage
${answers.usage} <a name="usage"></a>

## License
${answers.license} <a name="license"></a>
${licenseNotice}

## Questions
${answers.githubUsername} <a name="questions"></a>

##### How to reach me

###### My GitHub
${answers.githubLink}

###### My email 
${answers.email}
`;
return readmeContent;
}


function generateLicenseBadge(license) {

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

