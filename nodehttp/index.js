const http = require('http'); //core modules
const fs = require('fs');
const path = require('path');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url + req.method);

  /*  res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html> <body> <h1> HELLO  </h1> </body> </html>'); */

    if(req.method == 'GET') 
    {
        var fileUrl;
        if(req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if(!exists)
                {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html> <body> <h1> ERROR' + filePath + '</h1> </body> </html>')
                    return;
                }
                else
                {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }
            })
        }
        else
        {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html> <body> <h1> ERROR' + filePath + '</h1> </body> </html>')
        }
    }

}) //function that takes in request & response

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`) //back quotes
}); //to start the server to listen for incoming request