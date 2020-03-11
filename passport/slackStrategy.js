const SlackStrategy = require('passport-slack').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = (passport) =>{
    passport.serializeUser((user,done)=>{
        done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err,user)=>{
            done(err,user)
        })
    });

    passport.use(new SlackStrategy({
        usernameField: 'username',
        passwordField: 'password'
        }, (accessToken, refreshToken, profile, done) => {
            // optionally persist profile data
            done(null, profile);
        }
    ));

};