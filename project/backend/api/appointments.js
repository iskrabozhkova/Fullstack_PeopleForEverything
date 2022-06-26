const express = require('express');
const router = express.Router();
const Advert = require('../model/advert');
const mongoose = require('mongoose');
const Appointment = require('../model/appointment');

router.post('/', (req,res) => {
    const {date, userEmail, advert} = req.body;
    const newAppointment = new Appointment({
        email: userEmail,
        date: date,
        advert: advert
    })
   newAppointment.save();
 res.status(201).send({message: "Appointment created"})
})
module.exports = router;