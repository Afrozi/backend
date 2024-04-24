const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.on('request',(req,res)=>{
    // fs.readFile('json.json','utf-8',(err,data)=>{
    //     // console.log(data);
    //     // console.log(err);
    //     res.end(data);
    // })
    const streamData = fs.createReadStream('json.json');
    streamData.pipe(res);
})

server.listen(8000,"127.0.0.1",(err)=>{
    console.log('server is a running');
})