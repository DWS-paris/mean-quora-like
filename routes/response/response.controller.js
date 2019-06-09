/*
Import
*/
    const Models = require('../../models/index')
    const { findOneRejectOrCreate, findOneAndPushId, findOneAndAddId, findOneAndDelete, fetchSingle, fetchAll, findAll } = require('../main.controller');
//

/*
Methods
*/
    // Method to create new item
    const createItem = (req) => {
        
        return new Promise( (resolve, reject) => {
            /* Define server data */
                req.body.author = { additionalName: req.user.pseudo, identifier: req.user._id };
                req.body.datePublished = new Date();
            //
            
            /**
             * Call findOneRejectOrCreate method
             * @param req: Request => The client request
             * @param model: String => The document model
             * @param requestOptions: Object => The option to check if exist
             */
                findOneRejectOrCreate(req, 'response', { headline: req.body.headline } )
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

    const updateItem = (req) => {
        console.log(req.body)
        console.log(req.params._id)
        return new Promise( (resolve, reject) => {
            Models.response.findById(req.params._id, (err, item) => {
                // Check reequest
                if(err){ 
                    console.log(err)
                    return reject(err) }
                else{
                    console.log(item)
                    // Check if user is allowed
                    if(item.author.identifier != req.user._id){
                        return reject('Not Allowed')
                    }
                    else{
                        // Edit item data
                        item.headline = req.body.headline;

                        // Save item
                        item.save((err, editedItem) => {
                            if(err){ return reject(err) }
                            else{ return resolve(editedItem) }
                        })
                    }
                }
            })
        })
    };

    const deleteItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    };

    const getResponseComment = (parentItem) => {
        return new Promise( (resolve, reject) => {
            Model.response.find({parentItem: parentItem}, (error, items) => {
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
