const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api")

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
        message: "Would you like to include a table of contents?",
        name: 'table',
        type: 'checkbox',
        choices: ['Installation', 'Usage', 'License', 'Contributors', 'Test'],
        default: ['Installation', 'Usage', 'License', 'Contributors', 'Test']
    },
    // {
    //     type: "confirm",
    //     name: "tableOfContents",
    //     message: "Would you like to create a Table of Contents"
    // },
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
        type: "list",
        message: "Enter your License(s)",
        name: "license",
        //message: "Enter your License(s)"
        choices: [{
                name: "MIT"
            },
            {
                name: "Apache 2.0"
            },
            {
                name: "GPL 3.0"
            },
            {
                name: "BSD 3"
            },
            {
                name: "None",
                checked: true
            },
        ]
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
        api(answers.username, async function (data) {
            if (data.email === null) {
                data.email = "Email is not provided";
            }
            const markdown = generateMarkdown(answers, data.email, data.avatar_url);

            await writeFileAsync("ReadMe.md", markdown);


        });
        console.log("Succesfully wrote to ReadMe.md");

    } catch (err) {
        console.log(err);
    };
}




// function api (username){
//     //var username = "washiPolly";
//     const queryUrl = `https://api.github.com/users/${username}`;

//     axios.get(queryUrl).then(function(res) {
//       const usernameURL = res.data.html_url
//       //console.log(usernameURL);


//       let avatar = res.data.avatar_url;
//       let email = res.data.email;

//       if(email === null){
//           email = "Email is not provided";
//       }
//       fs.appendFileSync("ReadMe.md", "# User GitHub email: " + email + "\n" + " " + "# Profile Picture: ![Avatar]" + "(" + avatar + ")");
//   });

// };

init();