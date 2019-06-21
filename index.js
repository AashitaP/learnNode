var rect = require('./rectangle');

function solveRect(l, b) {

    rect(l,b, (err, rectangleObj) => { //err & rectangle obj will be filled by rectangle.js module when call back function is called with two parameterd
        if(err) {
            console.log(err.message);
        }
        else {
            console.log("area: " + rectangleObj.area()); //values already passed in in rectangle.js
        }

    });
}

solveRect(2,4);