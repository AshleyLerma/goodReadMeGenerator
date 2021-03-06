// all requires
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// converts a callback-based function to a Promise-based one
const writeFileAsync = util.promisify(fs.writeFile);

// uses inquirer to prompt user for all answers
// provides default answers if skipped
function promptUser() {
  return inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "GitHub Username:",
      default: "Enter your GitHub username here",
    },
    {
      name: "email",
      type: "input",
      message: "Your email:",
      default: "Enter your email address here",
    },
    {
      name: "repoName",
      type: "input",
      message: "Repository Name:",
      default: "Enter your repository name here",
    },
    {
      name: "description",
      type: "input",
      message: "Description",
      default: "Enter your project description here",
    },
    {
      name: "installation",
      type: "input",
      message: "Code needed to install your project:",
      default: "Enter the code needed to install your project",
    },
    {
      name: "usage",
      type: "input",
      message: "Usage:",
      default: "Enter your usage instructions here",
    },
    {
      name: "credits",
      type: "input",
      message: "Credits:",
      default: "Enter information about any collaborators here",
    },
    {
      name: "license",
      type: "input",
      message: "License:",
      default: "Enter your license information here",
    },
    {
      name: "contribute",
      type: "input",
      message: "Contributing:",
      default: "Enter your contributor information here",
    },
    {
      name: "tests",
      type: "input",
      message: "Tests:",
      default: "Enter your testing information here",
    },
  ]);
}

// creates markdownfile plugging in the user answers
function generateMD(answers) {
  return `
 # ${answers.repoName}

 ![GitHub top language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repoName})

  ## Description
  ${answers.description}

  ## Table of Contents
  + [Description](#description)
  + [Installation](#installation)
  + [Usage](#usage)
  + [Credits](#credits)
  + [License](#license)
  + [Contributing](#contributing)
  + [Tests](#tests)
  + [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:

   ${answers.installation}

  ## Usage
   ${answers.usage}

  ## Credits
   ${answers.credits}

  ## License
   ${answers.license}

  ## Contributing
   ${answers.contribute}

  ## Tests
   ${answers.tests}

  ## Questions
   ![GitHub profile photo](https://github.com/${answers.username}.png?size=100)
    + [EMAIL ME](${answers.email} "${answers.email}")

  `;
}

// The order the functions should run
promptUser()
  .then(function (answers) {
    const md = generateMD(answers);
    return writeFileAsync("README.md", md);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });
