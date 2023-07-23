const fs = require('fs');

fs.writeFile('nodejs_architecture.txt',"Architecture of Nodejs comprises two main components Asynchronous Model and Non-Blocking I/O operations.", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Success");
    }
})