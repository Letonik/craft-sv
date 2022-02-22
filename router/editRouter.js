const Router = require('express');
const router = new Router();
const editController = require('../controllers/editController');

router.post('/add-image', editController.addImage);

module.exports = router;