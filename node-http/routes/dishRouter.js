const express = require('express');
const bp = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bp.json());

//one single unit
dishRouter.route('/') //endpoint
.all((req, res, next) => { //does it for all types of requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); //will continue to look for additional specificaitions, like continue;

})
.get((req, res, next) => {
    res.end('All dishes'); //ends request, sends response

})
.post((req, res, next) => {
    res.end('Add dish ' + req.body.name + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting all');
});

module.exports = dishRouter;