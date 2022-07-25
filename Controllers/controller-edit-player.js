const express = require('express');
const { user, detail } = require('../models');
const router = express.Router();

router.get("/:id/edit", (req,res)=>{
    const { id } = req.params
    user.findOne({
        where:{id},
        include:detail
    }).then (x =>{
        res.render('edit-player.ejs', {x})
    })
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

router.post("/db-input/register", (req,res)=>{
    const { username, password, fullname, alias_name, birthplace } = req.body
    user.register({
        username,
        password
    }).then(user =>{
        detail.create({
            id:user.id,
            id_user:user.id,
            fullname,
            alias_name,
            birthplace,
        }).then(() =>{
            res.redirect("/login")
        })
    })
});

router.post("/db-input/add-player", (req,res)=>{
    const { username, password, fullname, alias_name, birthplace } = req.body
    user.register({
        username,
        password
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