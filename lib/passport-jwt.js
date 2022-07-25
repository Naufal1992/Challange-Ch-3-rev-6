const passportJWT = require('passport' )
const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt' )
const { user } = require('../models' )


const options = {

    jwtFromRequest : ExtractJwt .fromHeader ('authorization' ),
    secretOrKey : 'xxxxyyyy' ,
}
passportJWT.use(new JwtStrategy (options, async (abc, done) => {

user.findByPk (abc.id)
.then(userx => done(null, userx))
.catch(err => done(err, false))
}))

module.exports = passportJWT