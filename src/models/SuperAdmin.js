const mongoose = require('mongoose');


const superAdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
   type: String,
   required: true
    }
},{timestamps: true});



const superAdmin = mongoose.model('superAdmin', superAdminSchema);

module.exports = superAdmin;