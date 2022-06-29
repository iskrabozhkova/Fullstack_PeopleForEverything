const express = require('express');
const router = express.Router();
const Advert = require('../model/advert');
const mongoose = require('mongoose')

router.post('/', async (req,res) => {
    const advert = req.body;
    const newAdvert = new Advert({
        id: advert.id,
        firstName: advert.firstName,
        lastName: advert.lastName,
        category: advert.category,
        service: advert.service,
        price: advert.price,
        photo: advert.photo,
        longDescription: advert.longDescription,
        date: advert.date,
        date1: advert.date1,
        date2: advert.date2,
        creatorId: advert.creatorId
    })
 await newAdvert.save()
 res.send(advert);
 })
 router.get('/:id', (req, res) => {
    const id = req.params['id'].substring(1);
    console.log(id);
       Advert.findOne({ '_id': id }, function(err, add){
           res.send(add);
           console.log(add);
       })
 })
 router.get('/', async(req, res) => {
        Advert.find({}, function(err, adverts) {
            var advertMap = {};
            adverts.forEach(function(advert) {
                advertMap[advert._id] = advert;
            });
            res.send(advertMap);  
          });
});

 module.exports = router;
