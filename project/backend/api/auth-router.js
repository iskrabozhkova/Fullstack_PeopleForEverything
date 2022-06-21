const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');
const {createToken, verify} = require('./jwt');
const cookieParser = require('cookie-parser');

router.post('/register', async (req,res) => {
    const user = req.body;
    // const foundUser = await User.findOne({email: user.email});
    // if(foundUser){
    //     return res.status(409).send({message: "User with given email already exists!"})
    // }
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
       const newUser = new User({
           firstName: user.firstName,
           lastName: user.lastName,
           password: user.password,
           email: user.email,
           role: user.role
       })
    await newUser.save();
    res.status(201).send({message: "User created"})
})

router.post('/login', async (req,res) => {
    //res.status(201).send({message: "connect"})
    const user = req.body;
    const {email} = req.body;
    //console.log(user);
    const userData = await User.findOne({email: user.email});
    if(!userData){
        return res.json({status: 'error', error: 'Invalid username/password'})
    }else{
        createToken(userData).then(token => {
            res.cookie('auth-token', token, {httpOnly: true});
            res.status(201).send({ email, token});
            });
        //return res.json({status: 'ok'})
    }
    // if(await bcrypt.compare(data.password, userData.password)){
    //     return res.json({status: 'ok'})
    // }
})

module.exports = router;