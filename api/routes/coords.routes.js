const Router = require('express')
const router = new Router()
const coordsController = require('../controllers/coords.controller')

router.post('/coords', coordsController.createCoords)
router.get('/coords', coordsController.getCoords)

module.exports = router