// fileOps.js
const http = require('http');
const fs = require('fs');

// ======================= READ FILE =======================
http.createServer(function (req, res) {
    fs.readFile('test.txt', function (err, data) {
        if (err) {
            res.write("Error: " + err.message);
            res.end();
            return;
        }
        res.write(data);
        res.end();
        console.log("Read Done");
    });
}).listen(5001, () => console.log("Server running at http://localhost:5001/ (Read File)"));


// ======================= WRITE FILE =======================
http.createServer(function (req, res) {
    fs.writeFile('test.txt', 'hey I am alan chris', function (err) {
        if (err) throw err;
        console.log("Write done");
        res.end("File written successfully");
    });
}).listen(5002, () => console.log("Server running at http://localhost:5002/ (Write File)"));


// ======================= APPEND FILE =======================
http.createServer(function (req, res) {
    fs.appendFile('test.txt', ' I am in 5BTCSA', function (err) {
        if (err) throw err;
        res.write("Append Done");
        res.end();
        console.log("Append done");
    });
}).listen(5003, () => console.log("Server running at http://localhost:5003/ (Append File)"));


// ======================= OPEN & CLOSE FILE =======================
http.createServer(function (req, res) {
    fs.open('test.txt', 'r', function (err, fd) {
        if (err) {
            res.write("Error: " + err.message);
            res.end();
            return;
        }
        console.log("File opened in READ mode");

        fs.close(fd, function (err) {
            if (err) throw err;
            console.log("File closed");
            res.write("File opened and then closed in READ mode");
            res.end();
        });
    });
}).listen(5004, () => console.log("Server running at http://localhost:5004/ (Open & Close File)"));

// ======================= DELETE FILE =======================
http.createServer(function (req, res) {
    fs.unlink('test.txt', function (err) {
        if (err) {
            res.write("Error: " + err.message);
            res.end();
            return;
        }
        console.log("File deleted");
        res.write("File deleted successfully");
        res.end();
    });
}).listen(5005, () => console.log("Server running at http://localhost:5005/ (Delete File)"));
