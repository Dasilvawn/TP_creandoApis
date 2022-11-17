const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/Api/apiGenresControllers');

router.get('/genres', apiGenresController.list);
router.get('/genres/detail/:id', apiGenresController.detail);


module.exports = router;  