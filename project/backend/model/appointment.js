const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId},
    email: {type: String},
    date: {type: String},
    advert: {type: mongoose.Schema.Types.Mixed}
},
{ collation: { locale: 'en_US', strength: 1 }},
{ timestamps: true }
 )

module.exports = mongoose.model('Appointments', AppointmentSchema);