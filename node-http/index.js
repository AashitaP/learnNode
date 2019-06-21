const http = require('http'); //core modules
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bp = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

app.use(morgan('dev'));
app.use(bp.json()); //fills req.body

/*app.get('/dishes/:dishId', (req, res, next) => {
    res.end('All dishes: ' + req.params.dishId); 

});

app.put('/dishes/:dishId', (req, res, next) => {
    res.end('Add to dish ' + req.body.name + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting all');
});
*/

app.use('/dishes', dishRouter); //where it is mounted

app.use(express.static(__dirname+'/public')); //serving up files

app.use((req, res, next) => { //when non existent files
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>hi</h1></body></html>')

})

const server = http.createServer(app)
server.listen(port, hostname)

/*const server = http.createServer((req, res) => {
    console.log(req.url + req.method);

  //  res.statusCode = 200;
   // res.setHeader('Content-Type', 'text/html');
  //  res.end('<html> <body> <h1> HELLO  </h1> </body> </html>'); 

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
}); //to start the server to listen for incoming request */