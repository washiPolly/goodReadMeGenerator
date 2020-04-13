const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const api = require("./api.js");

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [{
        type: "input",
        name: "username",
        message: "What is your GitHub username"
    },
    {
        type: "input",
        name: "title",
        message: "What is title of your Project"
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your Project"
    },
    {
        type: "confirm",
        name: "tableOfContents",
        message: "Would you like to create a Table of Contents"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the Installation steps required"
        },
    {
    type: "input",
    name: "usage",
    message: "Please provide examples for use"
    },
    {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any"
    },
    {
        type: "input",
        name: "license",
        message: "Enter your License(s)"
        },
    {
    type: "input",
    name: "badges",
    message: "Enter a Badge url if any"
    },
    {
        type: "confirm",
        name: "contributing",
        message: "Would you like other develpers to contribute"
        },
        {
    type: "input",
    name: "tests",
    message: "Examples on how to run Tests"
    }
];

async function init() {
    try {
        const answers = await inquirer.prompt(questions)
        const githubData = api(answers.username);
        const markdown = generateMarkdown(githubData);

        await writeFileAsync("ReadMe.md", markdown);
   
        console.log("Succesfully wrote to ReadMe.md");
    
    }
    catch (err){
        console.log(err);
    };
}



// function writeToFile(fileName, data) {
//     const writeFile = fs.writeFile;
// }

// function init() {
//     inquirer.prompt(questions).then(api(`${questions.username}`));
    
//         writeToFile("Readme.md", generateMarkdown({
//             ...data
//         }));
    
// }






// function init() {
//     inquirer.prompt(questions).then((data) => {
//         writetofile("Readme.md", generateMarkdown({
//             ...data
//         }));
//     })
// }

init();