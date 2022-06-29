const mongoose = require('mongoose');

const usergoogle = require('../models/usergoogle');

let TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function (passport) {

   passport.serializeUser(function (user, donde) {

      donde(null, user);
   });


   passport.deserializeUser(function (obj, donde) {

      donde(null, obj);
   });


   passport.use(new TwitterStrategy({
      consumerKey: 'RHRxZGlVUS1zNEp1a0tEX1U0RnM6MTpjaQ',
      consumerSecret: 'N4WDXCVRQ0Rs10KwzZKgcZrpAaEIbQ8jA_zapLsL7ALYxTBypD',
      callbackURL: '/auth/twitter/callback'
   }, function (accessToken, refreshToken, profile, done) {

      usergoogle.findOne({ provider_id: profile.id }, funtion(error, user));

      if (error) throw (error);

      if (!error && usergoogle != null) return done(null, user);

      let usernew = new usergoogle({
         provider_id: profile.id,
         provider: profile.provider,
         name: profile.displayName,
         photo: profile.photos[0].value,

      });

      usergoogle.save(function (error) {
         if (error) throw (error);
         done(null, usernew);
      });





   }))





}