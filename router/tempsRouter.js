const Router = require('express');
const router = new Router();
const tempsController = require('../controllers/tempsController');

router.post('/', tempsController.createNew);
/*router.get('/', tempsController.getAll);*/

module.exports = router;