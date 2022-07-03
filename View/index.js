const express = require('express');
const { user, detail, point } = require('../models');
const router = express.Router();


router.use(express.static('view'));
// router.set('views', __dirname + '/view');
router.use(express.urlencoded({ extended: true }));

router.get("/", (req,res)=>{
    return res.render('index.ejs')
});

router.get("/Game", (req,res)=>{
     return res.render('index2.ejs')
});

router.get("/Login", (req,res)=>{
     return res.render('index3.ejs')
});

router.get("/list-player", (req,res)=>{
    user.findAll({
        include : detail
    }).then(x=>{
        res.render('index4.ejs', {x})
    })
});


// Untuk di perbaiki dan di kembangkan
// router.get("/list-player", (req,res)=>{
//     user.findAll({
//         include: [{
//             model: detail,
//             include: [{
//               model: point
//             }],
//           }],
//     })
//         .then(x=>{
//             res.render('index4.ejs', {x})
//         })
// });

router.get("/list-player/create", (req,res)=>{
    return res.render('index5.ejs')
});

router.post("/db-log", (req,res)=>{
    const { username, password} = req.body
    user.findOne({
        where:{
            username,
            password,
        }
    }).then (response =>{
        if (response != null){
            res.redirect("/list-player")
        } else{
            res.redirect("/Login")
        }
    })
});

router.post("/db-input", (req,res)=>{
    const { username, password, fullname, alias_name, birthplace } = req.body
    user.create({
        username,
        password,
        isSuperAdmin: false
    }).then(() =>{
        detail.create({
            fullname,
            alias_name,
            birthplace,
        }).then(() =>{
            res.redirect("/list-player")
        })
    })
});


//         .then(Response =>{
//             res.redirect("/list-player")
//         })
//     })
// });

module.exports = router;