const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

module.exports = (passport) => {
    require('../passport/localStrategy')(passport);
    router.get('/', (req,res) => {
        res.render('login/index');
    });

    router.post('/', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
    }));

    router.get('/demoCreateUser', (req,res)=>{
        mongoose.model('User').create({
            username: "toto",
            password: "123456"
        }, (err, item) => {
            res.send("done");
        })
    });
return router;
};

