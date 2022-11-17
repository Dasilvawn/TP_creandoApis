const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/Api/apiGenresControllers');

router.get('/', apiGenresController.list);
router.get('/:id', apiGenresController.detail);


module.exports = router;  