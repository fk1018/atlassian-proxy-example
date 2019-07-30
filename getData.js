const axios = require('axios');
const {username,password} = require('./config');

async function getData(url) {
   // fetch data from a url endpoint
   try{
      const response = await axios({
         method: 'GET',
         url: url,
         auth: { username: username, password: password },
         responseType: 'text'
      })
      return response.data;
   } catch(err){
      console.log(err)
   }
}

module.exports = {
   getData:getData
}