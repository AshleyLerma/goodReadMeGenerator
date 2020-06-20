const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [];

inquirer.prompt([
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
    name: "",
    type: "input",
    message: ":",
    default: "",
  },
  {
    name: "",
    type: "input",
    message: ":",
    default: "",
  },
  {
    name: "",
    type: "input",
    message: ":",
    default: "",
  },
]);

// function writeToFile(fileName, data) {}

// function init() {}

// init();
