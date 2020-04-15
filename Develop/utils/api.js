const axios = require("axios");
//const index = require("../index");

var rtnUsername; //I added this here to test if the variable isn't coming up because it wasn't global
var email;

// console.log(`${username}`);

function runApi(username, cb){
    //var username = "washiPolly";
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res) {
      const usernameURL = res.data.html_url
      //console.log(usernameURL);
      cb(res.data);
      var rtnUsername =  res.data.login
      
      
      //module.exports.rtnUsername = rtnUsername;
      //console.log(rtnUsername);
      // const avatar = res.data.avatar_url;
      email = res.data.email;
      

      
      
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
//runApi();
module.exports = runApi;

