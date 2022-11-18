const db = require('../../database/models');
const sequelize = db.sequelize;

const apiActorsController = {

    list: async (req, res) => {
        try {
          const actors = await db.Actors.findAll({
            attributes: {
              exclude: ["created_at", "updated_at"],
            },
          });
    
          res.status(200).json({
            meta: {
              status: 200,
              total: actors.length,
              url: "/api/actors",
            },
            data: actors,
          });
        } catch (error) {
          return res.status(500).json({
            message: "comuniquese con el administrador",
          });
        }
    },
   
    'detail': async (req, res) => {

        try {
            const actor = await db.Actor.findByPk(req.params.id, {
              attributes: {
                exclude: ["created_at", "updated_at"],
              },
            });
      
            res.status(200).json({
              meta: {
                status: 200,
                url: `/api/actors/${req.params.id}`,
              },
              data: actor,
            });
          } catch (error) {
            return res.status(500).json({
              message: "comuniquese con el administrador",
            });
        }
},
}

module.exports = apiActorsController;