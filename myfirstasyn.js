const fs = require("fs");
 

fs.readFile(process.argv[2],'utf-8', function (err, contents) {
  if (err) 
    return err;
  
 
  console.log(contents.split("\n").length - 1)
})