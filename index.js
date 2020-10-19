const inquirer = require('inquirer');
const licenses = ["Apache 2.0", "MIT", "FreeBSD"];
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
        name: "contributors"
    }
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


  output = `# READ<E for Justin's project
  
  * here's bullet 1

  # table of contents
  [questions](questions)

  ## questions

  ${responses.question}

  ## license

   Apache 2.0
  `