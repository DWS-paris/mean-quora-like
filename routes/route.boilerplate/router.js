/*
Imports & configuration
*/
  // Class
  const express = require('express');
  const classRouter = express.Router({ mergeParams: true });

  // Modules
  const Mandatory = require('../../services/mandatory.service');
  const Vocabulary = require('../../services/vocabulary.service');
  const { createItem } = require('./category.controller');
  const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
  const { checkFields } = require('../../services/request.checker');
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
            const { miss, extra, ok } = checkFields( Mandatory.auth, req.body ); // Edit the mandatory
            
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
            else{
                // Request is OK
                createItem(req)
                .then( apiRes =>  sendApiSuccessResponse(res, Vocabulary.request.success, apiRes))
                .catch( apiErr => sendApiErrorResponse(res, Vocabulary.request.error, apiErr));
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