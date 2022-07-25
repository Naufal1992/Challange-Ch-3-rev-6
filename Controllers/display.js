const express = require('express');
const { user, detail } = require('../models');
const router = express.Router();

const jangan = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/login')    
}

router.use(express.static('views'));
// router.set('views', __dirname + '/view');
router.use(express.urlencoded({ extended: true }));

router.get("/", (req,res)=>{
    return res.render('home.ejs')
});

router.get("/Game", jangan, (req,res)=>{
     return res.render('game.ejs')
});

router.get("/Login", (req,res)=>{
     return res.render('login.ejs')
});

router.get("/list-player", jangan, (req,res)=>{
    user.findAll({
        include : detail
    }).then(x=>{
        res.render('user-list.ejs', {x})
    })
});

router.get("/list-player/create", jangan, (req,res)=>{
    res.render('add-player.ejs')
});

router.get("/register-player", (req,res)=>{
    res.render('register-player.ejs')
});

router.get('/whoami', jangan, (req, res)=>{
    const { username } = req.user.dataValues
    res.send('akun aktif '+ username )
});

module.exports = router;