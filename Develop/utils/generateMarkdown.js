const fs = require("fs");
//const api = require("./api");

function generateMarkdown(answers, email, avatar) {
  
  let toc = '';
  answers.table.forEach(item=> toc += `* [${item}](#${item})\n`);
  return `

# Project Title: ${answers.title}

## Description

${answers.description}


## Table of Contents

${toc}


## Installation

${answers.installation}


## Usage

${answers.usage}


## Collaborators 

${answers.credits} 


## License

${answers.license}


## 🏆 Badges

![Badge](${answers.badges})


## Contributors

${answers.contributing}


## Tests

${answers.tests}


## GitHub Username


${answers.username}

## User GitHub email 


${email}


## Profile Picture 

![Avatar](${avatar})

 `


};


module.exports = generateMarkdown;



      
      
  
      

   

  

