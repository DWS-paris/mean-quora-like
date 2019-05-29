/*
Import
*/
    const Model = require('../../models/comment.model')
    const { findOneRejectOrCreate, findOneAndPushId, findOneAndAddId, findOneAndDelete, fetchSingle, fetchAll, findAll } = require('../main.controller');
//

/*
Methods
*/
    // Method to create new item
    const createItem = (req) => {
        
        return new Promise( (resolve, reject) => {
            console.log(req.user._id)
            /* Define server data */
                req.body.author = req.user._id;
                req.body.datePublished = new Date();
            //
            console.log(req.body)
            /**
             * Call findOneRejectOrCreate method
             * @param req: Request => The client request
             * @param model: String => The document model
             * @param requestOptions: Object => The option to check if exist
             */
                findOneRejectOrCreate(req, 'comment', { headline: req.body.headline } )
                .then( item => resolve( item ))
                .catch( error => reject( error ));
            //
        });
    };

    // Method to fetch all items
    const listItems = () => {
        return new Promise( (resolve, reject) => {
            /**
             * Call findAll method
             * @param model: String => The document model
             */
                findAll('comment')
                .then( items => resolve( items ))
                .catch( error => reject( error ));
            //
        })
    };
    
    const readItem = () => {
        return new Promise( (resolve, reject) => {
            findAll('comment')
            .then( items => resolve( items ))
            .catch( error => reject( error ));
        })
    };

    const updateItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    };

    const deleteItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    };

    const getResponseComment = (parentItem) => {
        return new Promise( (resolve, reject) => {
            Model.find({parentItem: parentItem}, (error, items) => {
                // Request check
                if(error) { return reject(error) }
                else { return resolve(items) };
            });
        })
    };
//

/*
Export
*/
    module.exports = {
        createItem,
        listItems,
        readItem,
        updateItem, 
        deleteItem,
        getResponseComment
    }
//
