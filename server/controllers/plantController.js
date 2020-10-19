const { Plant, Favorite } = require('../models')

class Controller {
  static fetchPlants(req, res, next) {
    Plant.findAll()
      .then(data => {
        data = data.map(elem => {
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
          id: data.id,
          plantId: data.dataValues.PlantId,
          userId: data.dataValues.UserId
        }
        res.status(201).json(data)
      })
      .catch(next)
  }
  static fetchFavorites(req, res, next) {
    const UserId = req.loggedUser.id
    Favorite.findAll({where: {UserId}, include: [Plant]})
      .then(data => {
        data = data.map(elem => {
          return {
            id: elem.dataValues.id,
            userId: elem.dataValues.UserId,
            plantId: elem.dataValues.PlantId,
            plant: {
              id: elem.dataValues.Plant.id,
              name: elem.dataValues.Plant.name,
              imgUrl: elem.dataValues.Plant.imgUrl,
              description: elem.dataValues.Plant.description
            }
          }
        })
        res.status(200).json(data)
      })
      .catch(next)
  }
  static deleteFavorites(req, res, next) {
    const id = +req.params.id
    Favorite.destroy({where: {id}})
      .then(data => {
        res.status(200).json({message: "successfully delete favorite plant"})
      })
      .catch(next)
  }
}

module.exports = Controller