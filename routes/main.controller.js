/*
Imports
*/
    const Models = require('../models/model.index');
    const Vocabulary = require('../services/vocabulary.service');
//

/*
Methods
*/
    /**
     * Create new object if not exist
     * @param req: Request => The client request
     * @param model: String => The document model
     * @param requestOptions: Object => The option to check if exist
    */
    const findOneRejectOrCreate = (req, model, requestOptions) => {
        return new Promise( (resolve, reject) => {
            // Check if item already exist
            Models[model].findOne(requestOptions, (error, item) => {
                // Request error
                if(error) { return reject(error) }
                else if(item) { return reject( Vocabulary.errors.notNew ) }
                else {
                    // Save item in DB
                    Models[model].create(req.body)
                    .then( response => resolve(response))
                    .catch( response => reject(response));
                };
            });
        });
    };

    /**
     * Add object ID in an object array of ID
     * @param _id: String => The ID of the object to delete
     * @param model: String => The document model
     * @param dataSet: Object => Data to add in correct array
    */
    const findOneAndPushId = (_id, model, dataSet) => {
        return new Promise( (resolve, reject) => {
            // Fecth model by id
            return Models[model].findOneAndUpdate( { _id: _id }, { $addToSet: dataSet }, { 'new': true } , (error, item) => {
                // Request error
                if(error) { return reject(error) }
                else { return resolve(item) };
            });
        });
    };

    /**
     * Add object ID in an object 
     * @param _id: String => The ID of the object to delete
     * @param model: String => The document model
     * @param dataSet: Object => Data to add in correct array
    */
    const findOneAndAddId = (_id, model, dataSet) => {
        return new Promise( (resolve, reject) => {
            // Fecth model by id
            Models[model].findOneAndUpdate( { _id }, { $set: dataSet }, { 'new': true } , (error, item) => {
                // Request error
                if(error) { return reject(error) }
                else { return resolve(item) };
            });
        });
    };

    /**
     * Delete object if exist & if user is allowed
     * @param _id: String => The ID of the object to delete
     * @param model: String => The document model
     * @param author: String => The user ID from JWT
    */
    const findOneAndDelete = (_id, model, author) => {
        return new Promise( (resolve, reject) => {
            // Fecth model by id
            Models[model].findById( _id , (error, item) => {
                // Request error
                if(error) { return reject(error) }
                else if( item.author !== author ) { return reject( Vocabulary.errors.notAllowed ) }
                else { return resolve(item) };
            });
        });
    };

    /**
     * Get informations from object ID
     * @param _id: String => The ID of the object
     * @param model: String => The document model
    */
    const fetchSingle = (_id, model) => {
        return new Promise( (resolve, reject) => {
            // Fecth model by id
            Models[model].findById(_id, (error, item) => {
                // Request error
                if(error) { return reject(error) }
                else { return resolve(item) };
            });     
        });
    };

    /**
     * Get informations from array of object ID
     * @param _idCollection: String[] => The array of object ID
     * @param model: String => The document model
    */
    const fetchAll = (_idCollection, model) => {
        return new Promise( (resolve, reject) => {
            // Set empty collection
            let dataArray = [];

            // Fetch _id collection
            ((async function loop() {
                for (let i = 0; i < _idCollection.length; ++i) {
                    const item = await fetchSingle(_idCollection[i], model);
                    dataArray.push(item)
                }
                // return all data
                return resolve(dataArray);
            })());
        });
    };

    /**
     * Get informations from array of object ID
     * @param _idCollection: String[] => The array of object ID
     * @param model: String => The document model
    */
    const findAll = (model) => {
        return new Promise( (resolve, reject) => {
            // Fecth model by id
            Models[model].find((error, item) => {
                // Request error
                if(error) { return reject(error) }
                else { return resolve(item) };
            });
        });
    };

/* 
Export
*/
    module.exports = { findOneRejectOrCreate, findOneAndPushId, findOneAndAddId, findOneAndDelete, fetchSingle, fetchAll, findAll }
//