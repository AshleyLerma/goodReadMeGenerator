const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

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
    {
      name: "license",
      type: "input",
      message: "License:",
      default: "Enter your license information here",
    },
  ]);
}

promptUser();

// function writeToFile(fileName, data) {}

// function init() {}

// init();
