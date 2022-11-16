const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
           try {
            let genres = await db.Genre.findAll({
                order : ['name']
            })
           } catch (err) {
            console.log(err)
           }
    },
        // db.Genre.findAll()
        //     .then(genres => {
        //         res.render('genresList.ejs', {genres})
        //     })
   
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;