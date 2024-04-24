const http = require('http');
const port = 8000;
const host = "127.0.0.1";
const server = http.createServer((req,res)=>{
     if (req.url == '/') {
        res.end('this is a home pages');
     }
     else if (req.url == '/about') {
           res.end("this is a about pages");
     }
     else if (req.url == '/contact') {
        res.end("this is a contact pages");
     }
     else {
        res.writeHead(404,{'Content-type':'text/html'});
        res.end("<h1>404 is a error pages</h1>")
     }
});
server.listen(port,host,()=>{
    console.log(`server is a running`);
})