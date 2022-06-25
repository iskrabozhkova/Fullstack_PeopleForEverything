const express = require('express');
const router = express.Router();
const Favourites = require('../model/fav');

router.post('/', async (req,res) => {
    const post = req.body;
    const newFavs = new Favourites({
        id: post.id,
        firstName: post.firstName,
        lastName: post.lastName,
        category: post.category,
        service: post.service,
        price: post.price,
        date: post.date
    })
 await newFavs.save()
 res.send(post);
    //res.status(201).send({message: "Advert created"})
  
 })
 router.get('/', (req,res) => {
    Favourites.find({}, function(err,favourites){
        let favsMap = {};
        favourites.forEach(function(fav){
            favsMap[fav._id] = fav;
        })
        res.send(favsMap);
    })
    
 })

 module.exports = router;
