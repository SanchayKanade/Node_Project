const fs = require('fs');

//Reading Files
fs.readFile('./blog.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

//Writing Files
