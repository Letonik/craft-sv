const Router = require('express');
const router = new Router();
const locationController = require('../controllers/locationController');

router.post('/', locationController.createNew);
router.get('/', locationController.getAll);

module.exports = router;