// Import file system module
const fs = require('fs');

// 1. Write File
fs.writeFile('example.txt', 'Hello, this is a new file.', (err) => {
    if (err) throw err;
    console.log('File created and data written.');

    // 2. Append File
    fs.appendFile('example.txt', '\nThis line is appended.', (err) => {
        if (err) throw err;
        console.log('Data appended to file.');

        // 3. Read File
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File Content:\n', data);

            // 4. Close File
            // First open the file, then close it
            fs.open('example.txt', 'r', (err, fd) => {
                if (err) throw err;

                fs.close(fd, (err) => {
                    if (err) throw err;
                    console.log('File closed successfully.');

                    // 5. Delete File
                    fs.unlink('example.txt', (err) => {
                        if (err) throw err;
                        console.log('File deleted successfully.');
                    });
                });
            });
        });
    });
});
