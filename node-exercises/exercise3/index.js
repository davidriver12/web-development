const fs = require('fs');

fs.writeFile('helloworld.txt', 'Hello world!', function(err){
    if(err){
        console.log(err);
    }
    else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("helloworld.txt", "utf8"));
  }
});