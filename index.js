const inquirer = require('inquirer');
const fs = require('fs');

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
               message: "Contributing: ",
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
     .then((response) => {
          const markdown = generateMarkdown(response);
          const filename = './utils/README.md';
          fs.writeFile(filename, markdown, (err) =>
            err ? console.log(err) : console.log("Success!")
          );
     });

function generateMarkdown(answers) {
     var str1 = "";
     return str1.concat(generateTitle(answers.project), 
          generateLicenseBadge(answers.license),
          generateSection("Description", answers.description), 
          generateStandaloneSection("Table of Contents"),
          generateLink("Installation","#installation"),
          generateLink("Usage","#usage"),
          generateLink("License","#license"),
          generateLink("Contributing","#contributing"),
          generateLink("Tests","#tests"),
          generateSection("Installation", answers.installation),
          generateSection("Usage", answers.usage),          
          generateSection("License", answers.license),
          generateSection("Contributing", answers.contributing),
          generateSection("Tests", answers.tests),
          generateStandaloneSection("Questions"),
          generateLink(`https://github.com/${answers.githubUsername}`,`https://github.com/${answers.githubUsername}`),
          generateLink(`${answers.email}`,`mailto:${answers.email}`));
}

function generateTitle(title) {
     return `# ${title}\n\n`;
}

function generateSection(section, data) {
     return `## ${section}\n\n
- ${data}\n\n`;
}

function generateStandaloneSection(section) {
     return `## ${section}\n\n`;
}

function generateLink(desc, link) {
     return `[${desc}](${link})\n\n`;
}

function generateLicenseBadge(license) {
     if (license === "GNU General Public License") {
          return `[![License](https://img.shields.io/badge/License-GNU-red)](https://www.gnu.org/licenses/gpl-3.0.en.html)\n\n`;
     } else if (license === "Apache License") {
          return `[![License](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
     } else if (license === "Microsoft Public License") {
          return `[![License](https://img.shields.io/badge/License-MS--PL-yellow)](https://opensource.org/licenses/MS-PL)\n\n`;
     } else if(license === "Berkeley Software Distribution") {
          return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-brightgreen.svg)](https://opensource.org/licenses/BSD-2-Clause)\n\n`;
     } else if (license === "Eclipse Public License") {
          return `[![License](https://img.shields.io/badge/License-EPL%201.0-blue.svg)](https://opensource.org/licenses/EPL-1.0)\n\n`;
     } else {
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
     }
}