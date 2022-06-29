const mongoose = require('mongoose');

const FavSchema = new mongoose.Schema({
    id: {type: Number},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    category: {type: String, required: true},
    service: {type: String, required: true},
    price: {type: Number},
    date: {date: Date},
    userId: {type: mongoose.Types.ObjectId, ref: 'Users'}
},
{ collation: { locale: 'en_US', strength: 1 }} )

module.exports = mongoose.model('Favourites', FavSchema);