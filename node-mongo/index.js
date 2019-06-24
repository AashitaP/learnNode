const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/'; //where mongodb server can be accessed
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => { //callback function, fills parameters 
    //with promises, all the callback functions are put into .then functions, returns the promise within the function, & chains & error is .catch
    console.log('Connected correctly');

    const db = client.db(dbname);
    dboper.insertDoc(db, {"name": "Pizza 1", "description": "test 2"}, 'dishes')
    .then((result) => {
        console.log('After Insert: ', result.ops); //how many ops have been carried out successfully
        return dboper.findDoc(db, 'dishes');
        })
        .then((docs) => { //ensures operation is completed, by putting it inside callback function
            console.log('Found: ');
            console.log(docs);
            return dboper.updateDoc(db, {name: "Pizza 1"}, {description: 'updated test'}, 'dishes');
            })
            .then((result)=> {
                console.log('Updated document: ', result.result);
                return db.dropCollection('dishes');
                })
                .then((result) => {
                    console.log("Dropped.", result);
                    return client.close();
                })
                .catch((err) => console.log(err));
})
.catch((err) => console.log(err));