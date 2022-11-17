const db = require('../../database/models');
const sequelize = db.sequelize;


const apiGenresController = {
    
    'list': async (req, res) => {
           try {
            let {order} = req.query;
            let orders = ['name','ranking'];
            
            if(orders.includes(order)){
                order = order ? order : 'id';
            }else{
                throw new Error(`El campo ${order} no existe. Campos admitidos: name, ranking`);
            }
                let genres = await db.Genre.findAll({
                order : [order],
                attributes : {
                    exclude : ['created_at','updated_at']
                }
            })
              if(genres.length){
                return res.status(200).json({
                    ok : true,
                    meta : {
                      total : genres.length
                    },
                    data : genres
                 })
            }
            throw new Error(
             'hubo un error'
            )
           } catch (err) {
            console.log(err);
            return res.status(500).json ({ 
                ok:false,
                msg : err.message ? err.message : 'comuniquese con el administrador'
            })
           }  
    },
   
    'detail': async (req, res) => {
        try {
            let genre = await db.Genre.findByPk(req.params.id, { 
                attributes : {
                    exclude : ['created_at','updated_at']
                }
            });

            if(genre){
                return res.status(200).json({
                    ok : true,
                    meta : {
                      status : 200
                    },
                    data : genre
                 })
            }
            throw new Error ('no existe el género')

        } catch (err) {
            console.log(err);
            return res.status(500).json ({ 
                ok:false,
                msg : err.message ? err.message : 'comuniquese con el administrador' 
            })
        }
},
}

module.exports = apiGenresController;