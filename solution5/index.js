const fs = require('fs');

fs.unlink("./solution2/nodejs_architecture.txt", (err)=>{
    if(err){
        console.log("Some Error Occured");
    }else{
        console.log("File Deleted Successfully");
    }
})