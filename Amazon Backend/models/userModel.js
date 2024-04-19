const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    } ,
    last_name:{
        type: String,
        // required: true,
    },
    address: String ,
    phone:Number,
    // images:[String],
    createAt:{
        type: Date,
        default:new Date()
    },
    updateAt:{
        type: Date,
        default:new Date()
    }
})

const userModel = mongoose.model('User', userSchema);
module.exports=userModel;