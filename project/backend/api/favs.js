const express = require('express');
const router = express.Router();
const Favourites = require('../model/fav');
const User = require('../model/user');

 router.post('/', async (req,res) => {
     const {userId, post} = req.body;
     const newFavs = new Favourites({
         id: post.id,
         firstName: post.firstName,
         lastName: post.lastName,
         category: post.category,
         service: post.service,
         price: post.price,
         date: post.date,
         userId: userId
     })
     newFavs.save((err, result) => {
        if(err){
            console.log(err)
        }else{
            User.findById(userId, (err, user) => {
                user.favourites.push(result);
                user.save();
            })
        }
    })
     res.status(201).send({message: "Favourite added"})
  })

  router.get('/:id', (req,res) => {
        const id = req.params['id'].substring(1);
        console.log(id)
        User.findById(id).populate('favourites').exec( function (err, favs) {
            console.log(favs)
            res.send(favs);
        })
})
    
 module.exports = router;
