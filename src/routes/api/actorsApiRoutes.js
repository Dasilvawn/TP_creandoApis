const express = require('express');
const router = express.Router();
const apiActorsControllers = require('../../controllers/Api/apiActorsControllers');

router.get('/', apiActorsControllers.list);
router.get('/:id', apiActorsControllers.detail);


module.exports = router;