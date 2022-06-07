const mongoose = require('mongoose');
const { Schema } = mongoose;
const LoandSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Loan_amount: {
        type: String,
        required: true
    },
    interest_rate : {
        type: String,
        required: true,
    },
    Loan_tenure: {
        type: String,
        required: true,
        
    },
    
});
const Loandetail =mongoose.model('Loand', LoandSchema);
module.exports = Loandetail;