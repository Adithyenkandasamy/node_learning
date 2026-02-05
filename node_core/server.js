const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile("data.txt","utf8",(err, data)=>{
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(data);
        });
    }
}).listen(3000);
    console.log("Server is Running......");          
