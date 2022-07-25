const express = require('express');
const router = express.Router();
const passportJWT = require ('../lib/passport-jwt');
const { user, detail, game_room } = require('../models');

router.use(express.json());
// router.use(passportJWT.initialize())

const janganJWT = passportJWT.authenticate('jwt', {
        session: false
})

function format(userx) {
    const { id, username } = userx
    return {
        id,
        username,
        accessToken : userx.generateToken ()
    }
}

router.post('/register',(req,res)=>{
    const { username, password, fullname, alias_name, birthplace } = req.body;
    if (username === undefined || username === "" || username ==="  "){
        return res.json({msg:"Silahkan input username"})
    } if (password === undefined || password === "" || password ==="  "){
        return res.json({msg:"Silahkan input password"})
    } if (fullname === undefined || fullname === "" || fullname ==="  "){
        return res.json({msg:"Silahkan input fullname"})
    } if (alias_name === undefined || alias_name === "" || alias_name ==="  "){
        return res.json({msg:"Silahkan input alias_name"})
    } if (birthplace === undefined || birthplace === "" || birthplace ==="  "){
        return res.json({msg:"Silahkan input birthplace"})
    };

    user.register({
        username,
        password
    }).then(user =>{
        detail.create({
            id:user.id,
            id_user:user.id,
            fullname,
            alias_name,
            birthplace
        }).then(()=>{
            res.json({msg:"Input Berhasil, Silahkan Login"})
        }) 
    })
});

router.post('/login',(req,res) =>{
    user.authenticate(req.body)
        .then(userx =>{
            res.json(
                format(userx)
            )
        })
})

router.post('/create-room',janganJWT,(req,res)=>{
    const {id} = req.user.dataValues
    game_room.create({
        p1_id:id
    }).then(room=>res.json({
        roomID: room.id
    }))
})

// save disini!
// router.post('/fight/:roomId', janganJWT, async(req,res)=>{
//     const { roomId } = req.params
//     const {id} = req.user.dataValues
//     const room = await game_room.findOne({where:{
//         id: roomId
//     }})
//     if (room == null) {
//         return res.status(404).json({msg:"room is not found"})
//     } if (room.winner_id != '' || room.winner_id != null){
//         return res.status(422).json({msg:"game has ended!"})
//     } if (room.p1_id != id || (room.p2_id !=null && room.p2_id !=id)){
//         return res.status(401).json({msg:"unauth player detected!"})
//     }
// })

router.get('/game', janganJWT,(req,res) =>{
    return res.render('game.ejs')
})

router.get('/me', janganJWT, (req,res)=>{
    const {username} = req.user.dataValues
    res.send('akun aktif ' + username)
})

// router.get('winner/:roomId', (req,res))

// pertanyaan bagaimana cara nge catch error di postman supaya tidak di ctrl + c setiap kali error

module.exports = router;