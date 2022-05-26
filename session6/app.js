const fs = require("fs")

fs.writeFile('data.txt', "hello there", 'utf8', (err) => {
    if (err) throw err;
    console.log('writing is done');
    fs.readFile('data.txt', 'utf8', (err, data)=>{
        if (err) throw err;
        console.log(data);
    });
    console.log('reading is done');
});


