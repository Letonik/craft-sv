const Router = require('express');
const router = new Router();
const locationController = require('../controllers/locationController');

router.post('/', locationController.createNew);

module.exports = router;