const axios = require("axios");
var rtnUsername; //I added this here to test if the variable isn't coming up because it wasn't global

// console.log(`${username}`);

function runApi(username){
    //var username = "washiPolly";
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const usernameURL = res.data.html_url
      //console.log(usernameURL);
      
      var rtnUsername =  res.data.login
      
      
      //module.exports.rtnUsername = rtnUsername;
      //console.log(rtnUsername);
      // const avatar = res.data.avatar_url;
      // const email = res.data.email;
      // const title = res.data.title;
      // const description = res.data.description;
      // const tableOfContents = res.data.tableOfContents;
      // const installation = res.data.installation;
      // const usage = res.data.usage;
      // const license = res.data.license;
      // const badges = res.data.badges;
      // const contributing = res.data.contributing;
      // const tests = res.data.tests;

      
      module.exports = { runApi, rtnUsername };
      console.log(rtnUsername)

  });

};

// const tesApi = ()=>{
//   const queryUrl = `https://api.github.com/users/farishkash`;

//     axios.get(queryUrl).then(function(res) {
//       const usernameURL = res.data.html_url
//       console.log(res);

//   })
// }
// console.log(api())
//api();
runApi();
module.exports = runApi;

module.exports = rtnUsername;
     console.log(rtnUsername);
