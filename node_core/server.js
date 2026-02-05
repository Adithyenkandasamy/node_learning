const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  if (req.url === "/") {

    const filePath = path.join(__dirname, "data.txt");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("File not found or server error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  }
}).listen(3000);

console.log("Server running on http://localhost:3000");
