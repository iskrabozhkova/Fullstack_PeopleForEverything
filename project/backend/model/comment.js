const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    userName: {type: String},
    comment: {type: String},
    adId: {type: mongoose.Types.ObjectId, ref: 'Advert'}
},
{ collation: { locale: 'en_US', strength: 1 }},
{ timestamps: true }
 )

module.exports = mongoose.model('Comments', CommentSchema);