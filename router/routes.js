const Router = require('express');
const router = new Router();
const locationRouter = require('./locationRouter');
const tempsRouter = require('./tempsRouter');

router.use('/location', locationRouter);
router.use('/temps', tempsRouter);

module.exports = router;