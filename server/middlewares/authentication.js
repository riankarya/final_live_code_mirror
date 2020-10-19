const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication(req, res, next) {
    try {
        req.loggedUser = verifyToken(req.headers.access_token)
        const email = req.loggedUser.email
        let user = await User.findOne({where: {email}})
        if (!user) throw ({name: 'AuthenticationError', msg: 'Not Authenticated'})
        next()
    }
    catch {
        next({ name: 'AuthenticationError', msg: 'Not Authenticated'})
    }
}

module.exports = authentication