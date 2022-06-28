const express = require('express');
const router = express.Router();
const Advert = require('../model/advert');
const User = require('../model/user');
const mongoose = require('mongoose');
const Appointment = require('../model/appointment');

router.post('/', (req,res) => {
    const {date, userEmail, advert} = req.body;
    const newAppointment = new Appointment({
        email: userEmail,
        date: date,
        advert: advert
    })
   newAppointment.save((err, result) => {
    if(err){
        console.log(err)
    }else{
        User.findById(userEmail, (err, appointment) => {
            console.log(appointment)
             appointment.appointments.push(result);
             appointment.save();
        })
    }
})
 res.status(201).send({message: "Appointment created"})
})

router.get('/:id', (req, res) => {
    const id = req.params['id'].substring(1);
   User.findById(id).populate('appointments').exec( function (err, appointment) {
    console.log(appointment)
    res.send(appointment);
   })
})


module.exports = router;