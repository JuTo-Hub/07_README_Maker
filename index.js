const inquirer = require('inquirer');
const licenses = [
    {
   type : "Apache 2.0",
   badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
    },
    {
    type : "MIT",
    badge : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
    },
    {
    type : "FreeBSD",
    badge : "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    },
];


const fs = require('fs');
const answers = inquirer.prompt([
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "Give a short description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "Please give installation instructions.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please explain the use of your application",
        name:"usage"
    },
    {
        type: "list",
        message: "Please choose your license",
        name: "license",
        choices: licenses.map((o) => o.type)
    },
    {
        type: "input",
        message: "Please add the link to your github page",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What tests were run?",
        name: "tests"
    },
    {
        type: "input",
        message: "Who are your contributors?",
        name: "contributors"
    },
    ])
  answers.then(function (responses){
    // Use user feedback for... whatever!!
    console.log(responses);
    const filename = `README.md`
    fs.writeFile(filename, render(responses), 'utf8', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Great. Your file has been created.");
        }
    })
  });

  function render(responses){
    let badge = ""
    licenses.forEach((l)=>{
        if(l.type === responses.license){
            badge = l.badge
        } 
    })

    let renderedMarkdown = `
    # ${responses.title} 

${badge}

  ## Table Of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${responses.description}
  
  ## Installation
  ${responses.installation}
  
  ## Usage 
  ${responses.usage}
  
  ## License
  ${responses.license}
  
  ## Contributors
  ${responses.contributors}

  ## Tests
  ${responses.tests}
  
  ## Questions
  [${responses.github}](https://github.com/${responses.github})


  [${responses.email}](https://github.com/${responses.email})
    `  
    return renderedMarkdown
  }