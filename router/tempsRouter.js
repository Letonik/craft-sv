const Router = require('express');
const router = new Router();
const tempsController = require('../controllers/tempsController');

router.put('/active', tempsController.setActive);
router.put('/code', tempsController.saveCode);
router.post('/', tempsController.createNew);
/*router.get('/', tempsController.getAll);*/

module.exports = router;