const express = require('express');
const router = express.Router();
const  apiMovieControllers = require('../../controllers/Api/apiMoviesControllers');

router.get('/', apiMovieControllers.list);
router.get('/:id', apiMovieControllers.detail);


module.exports = router;  