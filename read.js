const fs = require("fs");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log(data);
});

