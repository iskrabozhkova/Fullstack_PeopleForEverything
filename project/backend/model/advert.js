const mongoose = require('mongoose');

const AdvertSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    category: {type: String, required: true},
    service: {type: String, required: true},
    price: {type: Number},
    price: {date: Date}
},
{ collation: { locale: 'en_US', strength: 1 }} )

module.exports = mongoose.model('Adverts', AdvertSchema);