const data = {
    name:"afrozkhan",
    age : 34,
    course:'adce'
};
const jsondata = JSON.stringify(data);
// console.log(jsondata);
const objdata = JSON.parse(jsondata);
// console.log(objdata);
const fs = require('fs');
// fs.writeFile('json.json',jsondata,(err)=>{
//     console.log('all right');
// });
 fs.readFile('json.json','utf-8',(err,data)=>{
          console.log(data);
})