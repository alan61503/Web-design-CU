var fs = require('fs');

fs.writeFile('test1.txt', 'My new files', function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("file created");
});