const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [];

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
  <h1>${answers.repoName}</h1>

  <h2>Description</h2>

  <p>${answers.description}</p>
  <h2>Table of Contents</h2>

  <h2>Installation</h2>

  <p>${answers.installation}</p>
  <h2>Usage</h2>

  <p>${answers.usage}</p>
  <h2>Credits</h2>

  <p>${answers.credits}</p>
  <h2>License</h2>

  <p>${answers.license}</p>
  <h2>Contributing</h2>

  <p>${answers.contribute}</p>
  <h2>Tests</h2>

  <p>${answers.tests}</p>
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

// function init() {}

// init();
