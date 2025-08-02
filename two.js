var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('text.txt', function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('File not found!');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(data);
        }
        res.end();
    });
}).listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
});