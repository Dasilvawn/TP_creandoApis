const db = require('../../database/models');
const sequelize = db.sequelize;
const path = require('path');
const { Op } = require("sequelize");
const moment = require('moment');



const apiMoviesController = {
    
    'list': async (req, res) => {
           try {
            let {order} = req.query;
            let orders = ['name','ranking'];
            
            if(orders.includes(order)){
                order = order ? order : 'id';
            }else{
                throw new Error(`El campo ${order} no existe. Campos admitidos: name, ranking`);
            }
                let movies = await db.Genre.findAll({
                order : [order],
                attributes : {
                    exclude : ['created_at','updated_at']
                }
            })
              if(movies.length){
                return res.status(200).json({
                    ok : true,
                    meta : {
                      total : movies.length
                    },
                    data : movies
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
            let movie = await db.Genre.findByPk(req.params.id, { 
                attributes : {
                    exclude : ['created_at','updated_at']
                }
            });

            if(movie){
                return res.status(200).json({
                    ok : true,
                    meta : {
                      status : 200
                    },
                    data : genre
                 })
            }
            throw new Error ('no existe la película')

        } catch (err) {
            console.log(err);
            return res.status(500).json ({ 
                ok:false,
                msg : err.message ? err.message : 'comuniquese con el administrador' 
            })
        }
},
}

module.exports = apiMoviesController;