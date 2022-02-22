const Router = require('express');
const router = new Router();
const locationRouter = require('./locationRouter');
const tempsRouter = require('./tempsRouter');
const editRouter = require('./editRouter');

router.use('/location', locationRouter);
router.use('/temps', tempsRouter);
router.use('/edit', editRouter);

module.exports = router;