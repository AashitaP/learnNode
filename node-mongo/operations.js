const assert = require('assert');

exports.insertDoc = (db, doc, collection, callback) => { //callback function is essentially a function that is called at the end of everything with the result
    const coll = db.collection(collection);
    return coll.insert(doc);
        
    /*(err, result) => {
        assert.equal(err, null);
        console.log("Inserted " + result.result.n + "into" + collection);
        callback(result);
    });*/

};

exports.findDoc = (db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find().toArray();
        
    /*(err, docs) => {
        assert.equal(err, null);
        callback(docs);
    });*/
};

exports.removeDoc = (db, doc, collection, callback) => {
    const coll = db.collection(collection);
    return coll.deleteOne(doc);
        
    /*(err, result) => {
        assert.equal(err, null);
        console.log("Removed document ", document); //comma if its a javascript object
        callback(result);
    });*/

};

exports.updateDoc = (db, doc, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(doc, {$set: update}, null);
        
    /*(err, result) => {
        assert.equal(err, null);
        console.log("updated doc with ", update);
        callback(result);
    });*/
};