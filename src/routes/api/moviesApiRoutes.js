const express = require('express');
const router = express.Router();
const  apiMovieControllers = require('../../controllers/Api/apiMoviesControllers');

router.get('/genres', apiMovieControllers.list);
router.get('/genres/detail/:id', apiMovieControllers.detail);


module.exports = router;  