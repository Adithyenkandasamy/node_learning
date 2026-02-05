const fs = require("fs");

fs.writeFile("output.txt", "Hello World!", (err) =>{
    if(err) throw err;
    console.log("File has been written successfully."); 
    });
    