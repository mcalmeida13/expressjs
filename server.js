const express = require('express');
const path = require('path');
// const bodyParser = import('body-parser');
// const bodyParser = require('depd')('body-parser');
const app = express();

app.use('/public', express.static(path.join(__dirname,'static')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (request,response) =>{
    response.sendFile(path.join(__dirname,'static','form.html'));
    // response.sendFile(path.join(__dirname,'static/css/','style.css'));
});

app.post('/', (request,response) =>{
    console.log(request.body);
    response.json({sucess:true});
});

app.listen(3000);

app.get('/example', (request,response) =>{
    response.send('hitting examaple route');
});

app.get('/example/:name/:age', (request,response) =>{
    console.log(request.params);
    console.log(request.query);
    response.send(request.params.name + " : " + request.params.age);
});