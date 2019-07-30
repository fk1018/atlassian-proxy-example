const getData = require('./getData').getData;
const {baseUrl,port} = require('./config');
const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    getData(baseUrl+/*query param goes here*/'')
    .then( data =>{
        res.send(data);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))