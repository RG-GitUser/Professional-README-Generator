// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}


function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return '';
}


function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
