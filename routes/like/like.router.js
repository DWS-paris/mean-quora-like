/*
Imports & configuration
*/
  // Class
  const express = require('express');
  const classRouter = express.Router({ mergeParams: true });

  // Modules
  const Mandatory = require('../../services/mandatory.service');
  const Vocabulary = require('../../services/vocabulary.service');
  const Models = require('../../models/index');
  const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
// 


/*
Class definition
*/
  class RouterClass {
    
    constructor( { passport } ) {
      this.passport = passport
    }

    // Définition des routes
    routes(){

        /**
         * Route to create new item
         * @param path: String => api endpoint
         * @param auth: Passport => use auth service to protect the route
         * @callback => create item and send back data
        */
        classRouter.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { return sendBodyError(res, Vocabulary.errors.noBody) }
            // Check fields in the body
            const { miss, extra, ok } = checkFields( Mandatory.like, req.body ); // Edit the mandatory
            
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
            else{
                

                // Check if item already exist
                Models.like.findOne({ about: req.body.about, author: req.user._id }, (error, item) => {
                    console.log(req.body)
                    // Request error
                    if(error) { return sendApiErrorResponse(res, Vocabulary.request.error, error) }
                    else if(item) { 
                        // Update value
                        item.value = !item.value;

                        // Save item in DB
                        item.save(req.body)
                        .then( response => {
                            console.log('updated like')
                            return sendApiSuccessResponse(res, Vocabulary.request.success, response)
                        })
                        .catch( response => {
                            console.log('error updated like')
                            return sendApiErrorResponse(res, Vocabulary.request.error, response)
                        });
                    }
                    else {
                        // Set server data
                        req.body.author = req.user._id; 
                        req.body.datePublished = new Date();
                        req.body.value = true;

                        console.log(req.body)

                        // Save item in DB
                        Models.like.create(req.body)
                        .then( response => {
                            console.log('new like')
                            return sendApiSuccessResponse(res, Vocabulary.request.success, newLike)
                        })
                        .catch( response => {
                            console.log('error new like')
                            return sendApiErrorResponse(res, Vocabulary.request.error, response)
                        });
                    };
                });
            };
        });
    };

    // Initialize routes
    init(){
        this.routes();
        return classRouter;
    };
  };
//


/*
Export class
*/
    module.exports = RouterClass;
//