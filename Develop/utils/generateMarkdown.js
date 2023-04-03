// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `- [License](#license)`;
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, please contact me at ${data.email}.

GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
