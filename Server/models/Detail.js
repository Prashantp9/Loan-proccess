const mongoose = require('mongoose');
const { Schema } = mongoose;
const DetailSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    first_name: {
        type: String,
        required: true
    },
    last_name : {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
        
    },
    Phone_number: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const Detail =mongoose.model('note', DetailSchema);
module.exports = Detail;