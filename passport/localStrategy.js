const localStrategy = require('passport-local').Strategy;
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

    passport.use('local', new localStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username,password, done) =>{
        User.findOne({username})
            .then((user=>{
                if (!user)
                    return done(null, false, {error: 'user_not_found'})
                if (user && user.password === password){
                    done(null, user);
                }
                else{
                    return done(null, false, { error: 'wrong_password'})
                }
            }))
    }));
};