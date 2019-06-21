module.exports = (x,y,callback)  => {
if(x<=0) {
    setTimeout(() => 
    callback(new Error("less"), null), //function, arrow function
    //calls callback with error & null
    2000); //timeout before callback called
}
else {
    setTimeout(() => 
    callback(null, 
    {
        perimeter: () => (2*x + 2*y),
        area: () => (x*y)
    }), //function, arrow function
    //calls callback with error set to null & object with 2 func
    2000); //timeout
}



}




