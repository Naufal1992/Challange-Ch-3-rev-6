const express = require('express');
const { user, detail } = require('../models');
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

router.get("/:id/edit", (req,res)=>{
    const { id } = req.params
    user.findOne({
        where:{id},
        include:detail
    }).then (x =>{
        res.render('index6.ejs', {x})
    })
});


router.get("/list-player/create", (req,res)=>{
    res.render('index5.ejs')
});

router.get("/db/:id/delete", (req,res)=>{
    const { id } = req.params

    user.destroy({
        where : {id}
    }).then(() =>{
        detail.destroy({
            where : {id}
        }).then(() =>{
            res.redirect("/list-player")
        })
    })
});

router.post("/db/:id/edit", (req,res)=>{
    const {id} = req.params
    const { username, password, fullname, alias_name, birthplace } = req.body
    user.update({
        username,
        password,
    },{where : {id}
    }).then(() =>{
        detail.update({
            fullname,
            alias_name,
            birthplace,  
        }, {where : {id}
        }).then(() =>{
            res.redirect("/list-player")
        })
    })
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
    }).then(user =>{
        detail.create({
            id:user.id,
            id_user:user.id,
            fullname,
            alias_name,
            birthplace,
        }).then(() =>{
            res.redirect("/list-player")
        })
    })
});

module.exports = router;