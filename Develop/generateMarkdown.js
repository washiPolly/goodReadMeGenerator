
const api = require("./api.js");

api.runApi("washiPolly");///this is just to test if api.js is working
console.log(`this is user name: ${api.rtnUsername}`);
const avatar = api.avatar;
const email = api.email;
const title = api.title;
const description = api.description;
const tableOfContents = api.tableOfContents;
const installation = api.installation;
const usage = api.usage;
const license = api.license;
const badges = api.badges;
const contributing = api.contributing;
const tests = api.tests;

// function generateMarkdown(data) {
//   return `
// # ${username}
// ![Avatar]${avatar}
// # User GitHub email: ${email}

// # ${title}
// # Description: ${description}
// # Table of Contents: ${tableOfContents}
// # Installation: ${installation}
// # Usage: ${usage}
// # License: ${license}
// # Badges: ![Badge]${badges}
// # Contributing: ${contributing}
// # Tests: ${tests}





// `;


// }


// generateMarkdown();
// module.exports = generateMarkdown;
