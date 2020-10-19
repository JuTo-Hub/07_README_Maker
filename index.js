const inquirer = require('inquirer');
const licenses = {
    "Apache 2.0":"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", 
    "MIT":"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
    "FreeBSD":"[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
};


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
        choices: licenses.keys()
    },
    {
        type: "input",
        message: "Please add the link to your github page",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    ])
  answers.then(function (responses){
    // Use user feedback for... whatever!!
    console.log(responses);
    const filename = `README.md`
    fs.writeFile(filename, JSON.stringify(responses, null, 2), 'utf8', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Great. Thank You");
        }
    })
  });

  function render(responses){
    let renderedMarkdown = `
    # ${responses.title} 

    ${licenses[responses.license]}

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
  ${response.license}
  
  ## Contributors
  ${response.contributor}

  ## Tests
  ${response.tests}
  
  ## Questions
  [${responses.github}](https://github.com/${responses.github})
  [${responses.email}](https://github.com/${responses.email})
    `  
    return renderedMarkdown
  }