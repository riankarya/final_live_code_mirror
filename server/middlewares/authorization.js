const { Favorite } = require('../models')

function authorization(req, res, next) {
    const UserId = req.loggedUser.id
    const id = req.params.id
    Favorite.findOne({where: {id}})
        .then(data => {
            if (!data) throw {name: 'NotFound', msg: 'Not Found'}
            else if (data.UserId == UserId) next()
            else throw {name: 'UnAuthorized', msg: 'Not Authorized'}
        })
        .catch(next)
}

module.exports = authorization