const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "GitHub Username:",
      default: "Enter your username here",
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
      default: "Enter your repository description here",
    },
    {
      name: "installation",
      type: "input",
      message: "Installation:",
      default: "Enter your install instructions here",
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

function generateMD(answers) {
  return `
 # ${answers.repoName}

 ![GitHub top language](https://img.shields.io/github/languages/top/A${answers.username}/${answers.repoName})

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

  `;
}

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
