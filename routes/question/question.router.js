/*
Import and configuration
*/
    // Class
    const { Router } = require('express');
    const MyRouter = Router({ mergeParams: true });

    // Modules
    const Vocabulary = require('../../services/vocabulary.service');
    const Mandatories = require('../../services/mandatory.service');
    const { createItem, listItems, readItem, updateItem, deleteItem } = require('./question.controller');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
// 


/*
Router definition
*/
    class MyRouterClass {
        // Inject passportr in the class
        constructor({ passport }) { this.passport = passport }

        // Define routes
        routes() {
            // Route CREATE item
            MyRouter.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) }
                
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.question, req.body);
                
                //=> Error: bad fields
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                
                //=> Request is validateed
                else{
                    createItem(req)
                    .then( apiRes =>  sendApiSuccessResponse(res, Vocabulary.request.success, apiRes))
                    .catch( apiErr => sendApiErrorResponse(res, Vocabulary.request.error, apiErr));
                }
            })

            // Route GET item
            MyRouter.get('/', (req, res) => {
                listItems()
                .then( apiRes =>  sendApiSuccessResponse(res, Vocabulary.request.success, apiRes))
                .catch( apiErr => sendApiErrorResponse(res, Vocabulary.request.error, apiErr));
            })
        };

        // Init method
        init() {
            this.routes();
            return MyRouter;
        }
    }
//


/*
Router export
*/
    module.exports = MyRouterClass;
// 