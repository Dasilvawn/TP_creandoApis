const express = require('express');
const router = express.Router();
const apiGenreControllers = require('../controllers/apiGenreContrellers');

router.get('/genres', apiGenreControllers.list);
router.get('/genres/detail/:id',apiGenreControllers.detail);


module.exports = router;