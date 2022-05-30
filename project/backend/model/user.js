const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    role: {type: String}
},
{ collation: { locale: 'en_US', strength: 1 }} )

module.exports = mongoose.model('Users', UserSchema);