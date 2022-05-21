const express = require('express');
const router = express.Router();
const Advert = require('../model/advert');

router.post('/', async (req,res) => {
    const advert = req.body;
    const newAdvert = new Advert({
        firstName: advert.firstName,
        lastName: advert.lastName,
        category: advert.category,
        service: advert.service,
        price: advert.price,
        date: advert.date
    })
 await newAdvert.save()
    res.status(201).send({message: "Advert created"})
 })

 module.exports = router;
