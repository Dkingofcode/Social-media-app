const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models.User");

module.exports = functiom (passport){
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
           User.findOne({ email: email.toLowerCase() }, (err, user) => {
             if(err){
                return done(err);
             }
             if(!user) {
                return done(null, false, { msg: `Email ${email} not found.`})
             }
           }) 
        })
    )
}