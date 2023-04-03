// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// Create promise for writefile in fs. 
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter a title for your project.';
        }
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter a description for your project.';
        }
      },
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter installation instructions.';
        }
      },
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter usage instructions.';
        }
      },
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter contribution guidelines.';
        }
      },
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter test instructions.';
        }
      },
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
      validate: (input) => {
        if (input.trim() !== '') {
          return true;
        } else {
          return 'Please enter your GitHub username.';
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      validate: (input) => {
        if (/\S+@\S+\.\S+/.test(input)) {
          return true;
        } else {
          return 'Please enter a valid email address.';
        }
      },
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
    try {
      // Ask the user the questions and wait for their responses
      const answers = await inquirer.prompt(questions);
  
      // Generate the README file content using the user's responses
      const readmeContent = generateMarkdown(answers);
  
      // Write the README file
      await writeToFile('README.md', readmeContent);
      console.log('Successfully generated README.md!');
    } catch (err) {
      console.error(err);
    }
  }
  
  // Function call to initialize app
  init();  
