/*
Import
*/
    const { findOneRejectOrCreate } = require('../main.controller');
//

/*
Methods
- Mise en place de la logique CRUD
*/
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            // CF. main controller
            findOneRejectOrCreate(req, 'identity', { _id: req.body._id } )
            .then( mongooseData => resolve( mongooseData ))
            .catch( mongooseError => reject( mongooseError ));
        });
    };
//

/*
Export
*/
    module.exports = {
        createItem
    }
//