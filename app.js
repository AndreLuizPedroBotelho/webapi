global.db = require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const router = express.Router();

const routes = require('./routes')(router);


app.use(router);

app.listen(port,()=>{
    console.log('API esta Funcionando');
});
