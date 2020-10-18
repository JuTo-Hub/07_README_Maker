const inquirer = require('inquirer');
const licenses = {}

const answers = inquirer.prompt([
      {
          type: "input",
          message: "What is the title of your project?",
          name: "title"
      },
      {
        type: "input",
        message: "Give a short description of your project",
        name: "decription"
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
        choices: licenses
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
    ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(responses);
    const filename = `${response.name}.md`
    false.writeFile(filename, reponses, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Great. Thank You");
        }
    })
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });