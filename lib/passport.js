const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { user } = require('../models')

async function authenticate(username, password, done) {
    try {
        const xy = await user.authenticate({ username, password })
        return done(null, xy)
    }

    catch(err) {
    return done(null, false, { message: err.message })
    }
}

passport.use(
    new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, authenticate)
)

passport.serializeUser(
    (user, done) => done(null, user.id)
)
passport.deserializeUser(
    async (id, done) => done(null, await user.findByPk(id))
)

module.exports = passport