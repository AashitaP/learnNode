const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/'; //where mongodb server can be accessed
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => { //callback function, fills parameters
    assert.equal(err, null);
    console.log('Connected correctly');

    const db = client.db(dbname);
    const collection = db.collection('dishes'); //dishes collection of documents
    dboper.insertDoc(db, {"name": "Pizza 1", "description": "test 2"}, 'dishes', (result) => {
        console.log('After Insert: ', result.ops); //how many ops have been carried out successfully
        dboper.insertDoc(db, {"name": "Pizza 2", "description": "test 2"}, 'dishes', (result) => {
            dboper.findDoc(db, 'dishes', (docs) => { //ensures operation is completed, by putting it inside callback function
            console.log('Found: ');
            console.log(docs);
            dboper.updateDoc(db, {name: "Pizza 1"}, {description: 'updated test'}, 'dishes', (result)=> {
                console.log('Updated document: ', result.result);
                db.dropCollection('dishes', (err, result) => {
                    console.log("Dropped.", result);
                    assert.equal(err, null);
                    client.close();
                });
            });
        });
    });
});
});