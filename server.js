const express = require('express');
const path = require('path');
const Joi = require('joi');
// const bodyParser = import('body-parser');
// const bodyParser = require('depd')('body-parser');

// console.log(Joi);
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
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10)
    });
    schema.validate(request.body, (err,result) => {
        if(err){
            response.send("Error has occurred");
        } else {
            console.log(result);
            response.send('sucessfully posted data');
        }
    });
    // response.json({success:true});
    // console.log(request.query);
    response.send('Sucessfully posted data');
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