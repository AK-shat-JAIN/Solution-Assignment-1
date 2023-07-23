const fs = require('fs');

fs.readFile("./solution2/nodejs_architecture.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})