const http = require('http');

const server = http.createServer((req,res) => {
    res.write('Welcome to our homepage');
    res.end();
});

server.listen(5000);