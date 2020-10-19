const { Plant, Favorite } = require('../models')

class Controller {
  static fetchPlants(req, res, next) {
    Plant.findAll()
      .then(data => {
        data.map(elem => {
          return {
            id: elem.id,
            name: elem.name,
            description: elem.description,
            imgUrl: elem.imgUrl
          }
        })
        res.status(200).json(data)
      })
      .catch(next)
  }
  static addFavorites(req, res, next) {
    const UserId = req.loggedUser.id
    const PlantId = +req.params.plantId
    Favorite.create({UserId, PlantId})
      .then(data => {
        data = {
          // id: data.id,
          plantId: data.dataValues.PlantId,
          userId: data.dataValues.UserId
        }
        console.log(data, 'asupppppppppppp');
        res.status(201).json(data)
      })
      .catch(next)
  }
  static fetchFavorites(req, res, next) {
    const UserId = req.loggedUser.id
    Favorite.findAll({where: {UserId}, include: [Favorite]})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = Controller