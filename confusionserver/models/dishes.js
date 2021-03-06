const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const currency = mongoose.Types.Currency;

const commentSchema = new Schema({
    rating: {
        type: Number, 
        min: 1, 
        max: 5,
        required: true    
    },
    comment: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const dishSchema = new Schema({
    name: {
        type: String, 
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    comments: [commentSchema],
    image: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: currency,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;