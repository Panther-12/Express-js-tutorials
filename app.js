// import http module
const http = require('http');
const {readFileSync} = require('fs');

// read contents of the html file
const homepage = readFileSync('./index.html');

// initialize the server
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end(homepage)
    }
    else if (req.url === '/about'){
        res.end('<h1>WELCOME TO THE ABOUT PAGE</h1>')
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.end('<h1> 404 PAGE NOT FOUND</h1>')
    }
})

// start the server
server.listen(5000)