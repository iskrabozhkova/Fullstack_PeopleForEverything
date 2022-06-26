const mongoose = require('mongoose');

const AdvertSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    category: {type: String, required: true},
    service: {type: String, required: true},
    longDescription: {type: String, required: true},
    price: {type: Number},
    date: {type: String},
    date1: {type: String},
    date2: {type: String},
},
{ collation: { locale: 'en_US', strength: 1 }} )

module.exports = mongoose.model('Adverts', AdvertSchema);