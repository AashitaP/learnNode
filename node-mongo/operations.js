const assert = require('assert');

exports.insertDoc = (db, doc, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(doc, (err, result) => {
        assert.equal(err, null);
        console.log("Inserted " + result.result.n + "into" + collection);
        callback(result);
    });

};

exports.findDoc = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find().toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);
    });
};

exports.removeDoc = (db, doc, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(doc, (err, result) => {
        assert.equal(err, null);
        console.log("Removed document ", document); //comma if its a javascript object
        callback(result);
    });

};

exports.updateDoc = (db, doc, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(doc, {$set: update}, null, (err, result) => {
        assert.equal(err, null);
        console.log("updated doc with ", update);
        callback(result);
    });
};