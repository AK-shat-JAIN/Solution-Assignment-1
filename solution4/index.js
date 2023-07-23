const fs = require('fs');

fs.appendFile("./solution2/nodejs_architecture.txt","\nSome advantages of Nodejs is it is best for making application Scalable, consule less memory, and Flexible",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.readFile("./solution2/nodejs_architecture.txt",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data.toString());
            }
        });
    }
})