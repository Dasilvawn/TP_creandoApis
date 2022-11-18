const db = require('../../database/models');
const sequelize = db.sequelize;

const apiGenresController = {

    list: async (req, res) => {
        try {
          const genres = await db.Genre.findAll({
            attributes: {
              exclude: ["created_at", "updated_at"],
            },
          });
    
          res.status(200).json({
            meta: {
              status: 200,
              total: genres.length,
              url: "/api/genres",
            },
            data: genres,
          });
        } catch (error) {
          return res.status(500).json({
            message: "comuniquese con el administrador",
          });
        }
    },
   
    'detail': async (req, res) => {

        try {
            const genre = await db.Genre.findByPk(req.params.id, {
              attributes: {
                exclude: ["created_at", "updated_at"],
              },
            });
      
            res.status(200).json({
              meta: {
                status: 200,
                url: `/api/genres/${req.params.id}`,
              },
              data: genre,
            });
          } catch (error) {
            return res.status(500).json({
              message: "comuniquese con el administrador",
            });
        }
},
}

module.exports = apiGenresController;