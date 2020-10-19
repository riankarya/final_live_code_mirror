const router = require('express').Router()
const userController = require('../controllers/userController')
const plantController = require('../controllers/plantController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.use(authentication)
router.get('/plants', plantController.fetchPlants)
router.post('/favorites/:plantId', plantController.addFavorites)
router.get('/favorites', plantController.fetchFavorites)
router.delete('/favorites/:id', authorization, plantController.deleteFavorites)

module.exports = router