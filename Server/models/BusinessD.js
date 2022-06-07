const mongoose = require('mongoose');
const { Schema } = mongoose;
const BusinessDSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Business_name: {
        type: String,
        required: true
    },
    Gst_number : {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        
    },
    
});
const Bdetail =mongoose.model('businessd', BusinessDSchema);
module.exports = Bdetail;