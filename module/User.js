const mongoose = require('mongoose');

const userSchems = new mongoose.Schema({
    username : {
        type: String
    },
    email : {
        type : String
    },
    password :{
        type: String
    },
    role : {
        type : String,
        default : 'User'
    },
    cart: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model('User',userSchems);  