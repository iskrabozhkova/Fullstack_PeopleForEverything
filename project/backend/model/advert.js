const mongoose = require('mongoose');

const AdvertSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    category: {type: String, required: true},
    service: {type: String, required: true},
    longDescription: {type: String, required: true},
    likes:[{type: mongoose.Types.ObjectId,ref:"User"}],
    price: {type: Number},
    photo: {type: String},
    date: {type: String},
    date1: {type: String},
    date2: {type: String},
    comments:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }],
    creatorId: {type: mongoose.Types.ObjectId}
},
{ collation: { locale: 'en_US', strength: 1 }},
{ timestamps: true }
 )

module.exports = mongoose.model('Adverts', AdvertSchema);