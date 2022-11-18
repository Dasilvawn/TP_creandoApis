const db = require('../../database/models');
const sequelize = db.sequelize;

const apiGenresController = {
    list: async (req, res) => {
        try {
          const movies = await db.Movie.findAll({
            include: ["genre"],
            attributes: {
              exclude: ["created_at", "updated_at"],
            },
          });
          res.status(200).json({
            meta: {
              status: 200,
              total: movies.length,
              url: "/api/movies",
            },
            data: movies,
          });
        } catch (error) {
          return res.status(500).json({
            message: "Internal server error",
          });
        }
      },
      detail: async (req, res) => {
        try {
          const movies = await db.Movie.findByPk(req.params.id, {
            include: ["genre"],
            attributes: {
              exclude: ["created_at", "updated_at"],
            },
          });
          res.status(200).json({
            meta: {
              status: 200,
              total: movies.length,
              url: `/api/movies/${req.params.id}`,
            },
            data: movies,
          });
        } catch (error) {
          return res.status(500).json({
            message: "Internal server error",
          });
        }
      },

}

module.exports = apiGenresController;

