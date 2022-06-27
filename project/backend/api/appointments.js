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

router.post('/allAppointments', (req,res) => {
    const id = req.data;
    // Appointment.find({ '_id': id }, function(err, add){
    //     res.send(add);
    //     console.log(add);
    // })
    Appointment.find({}, function(err, appointments) {
     
        // let appointmentsMap = {};
        // appointments.forEach(function(appointment) {
        //     appointmentsMap[appointment._id] = appointment;
        // });
        // res.send(appointmentsMap);  
      })
})
module.exports = router;