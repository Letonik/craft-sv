const Router = require('express');
const router = new Router();
const tempsController = require('../controllers/tempsController');

router.post('/', tempsController.createNew);

module.exports = router;