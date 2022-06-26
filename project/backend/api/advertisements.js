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
        longDescription: advert.longDescription,
        date: advert.date,
        date1: advert.date1,
        date2: advert.date2
    })
 await newAdvert.save()
 res.send(advert);
    //res.status(201).send({message: "Advert created"})
  
 })
//  router.get('/:id', (req, res) => {
//     res.send("Success");
//  })
 router.get('/:id', (req, res) => {
    // const id = req.params['id'];
    // Advert.findOne({ _id: mongoose.Types.ObjectId(Number(id)) }).then(res => console.log(res))
    const id = req.params['id'].substring(1);
    console.log(id);
       Advert.findOne({ '_id': id }, function(err, add){
           res.send(add);
           console.log(add);
       })
 })
 router.get('/', async(req, res) => {
        // const posts = await Advert.find().toArray();
        // res.json(posts);
        Advert.find({}, function(err, adverts) {
            var advertMap = {};
        
            adverts.forEach(function(advert) {
                advertMap[advert._id] = advert;
            });
        
            res.send(advertMap);  
          });
});

 module.exports = router;
