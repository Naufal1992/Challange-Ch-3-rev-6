const express = require('express');
const passport = require('../lib/passport')
const router = express.Router();

// backup
// router.post("/db-log", (req,res)=>{
//     const { username, password } = req.body
//     user.findOne({
//         where:{
//             username,
//             password,
//         }
//     }).then (response =>{
//         if (response != null){
//             return res.redirect("/list-player")
//         } else{
//             return res.redirect("/Login")
//         }
//     })
// });

router.post('/db-log', passport.authenticate('local', {
    successRedirect:'/list-player',
    failureRedirect:'/login',
    failureFlash:true
}));

module.exports = router;