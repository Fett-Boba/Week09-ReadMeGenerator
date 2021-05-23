const inquirer = require('inquirer');
inquirer
     .prompt([
          {
               name: "project",
               type: "input",
               message: "Project Title:",
          },
          {
               name: "description",
               type: "input",
               message: "Project description: ",
          },

          {
               name: "installation",
               type: "input",
               message: "Installation instructions: ",
          },

          {
               name: "usage",
               type: "input",
               message: "Usage information: ",
          },

          {
               name: "contributing",
               type: "input",
               message: "Contribution guidelines: ",
          },

          {
               name: "tests",
               type: "input",
               message: "Test instructions: ",
          },

          {
               name: "license",
               type: "list",
               message: "Choose your license:",
               choices: ["GNU General Public License", 
                    "Apache License", 
                    "Microsoft Public License", 
                    "Berkeley Software Distribution", 
                    "Eclipse Public License",
                    "MIT License"],
          },

          {
               name: "githubUsername",
               type: "input",
               message: "GitHub username: ",
          },

          {
               name: "email",
               type: "input",
               message: "Email address: ",
          },

     ])
     .then((answer) => {
          console.log("Project Name: " + answer.project);
          console.log("Project desc: " + answer.description);
          console.log("Project installation: " + answer.installation);
          console.log("Project usage: " + answer.usage);
          console.log("Project contributors: " + answer.contributing);
          console.log("Project tests: " + answer.tests);
          console.log("License: " + answer.license);
          console.log("GitHub username: " + answer.githubUsername);
          console.log("Email: " + answer.email);

     });

