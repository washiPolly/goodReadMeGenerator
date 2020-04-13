const fs = require('fs');
const util = require('util');
const axios = require('axios');
const inquirer = require ('inquirer');

const writeFileAsync = util.promisify(fs.writeFile);

let promptUser = () => {
    return inquirer.prompt({
        type: "input",
        username: "username",
        message: "what is your GitHub username?"
    });
    // .then(function({ username }){
    //     const queryURL = `https://api.github.com/users/${username}`;

        // axios.get(queryUrl).then(function(res) {
        //     const repoNames = res.data.map(function(repo) {
        //       return repo.name;
        //     });
      
        //     const repoNamesStr = repoNames.join("\n");
      
    
};

const generateReadMe = (answers) => {
    return
        `# GitHub username: __${answers.username}__ #`;
}
//promptUser();


//ask questions
//generate html
//insert answers
//write file

//when using async/await, need to include try and catch
async function init(){
    try{
        const answers = await promptUser();
        const readme = generateReadMe(answers); 
        await writeFileAsync("readme.md", readme);
        console.log("Success")

    }catch(err){
        console.log(err);
    }
}

init();
// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
