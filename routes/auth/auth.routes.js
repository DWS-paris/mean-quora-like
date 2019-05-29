/*
Imports
*/
    // Node
    const express = require('express');
    const authRouter = express.Router();

    // Inner
    const Mandatory = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { register, confirmIdentity, login, setPassword } = require('./auth.controller');
//

/*
Routes definition
*/
    class AuthRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            /**
             * POST Route to create new identity
             * @param body: Object => email: String (unique), password: String
             * @callback => create identity and associated user
            */
            authRouter.post( '/register', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.register, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    register(req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            });

            /**
             * POST Route to validate identity
             * @param body: Object => _id: String, password: String
             * @callback => change identity.isValidated to 'true'
            */
            authRouter.post( '/identity-validation', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.idValidation, req.body );
                
                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    confirmIdentity(req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                };
            });

            /**
             * POST Route to login user
             * @param body: Object => email: String, password: String
             * @callback => send user _id and date informations
            */
            authRouter.post( '/login', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.login, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    login(req.body, res)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                };
            });

            /**
             * GET Route to check identity token (for Angular AuthGuard)
             * @param passport: AuthStrategy => use the access token to check user identity
             * @callback => send user _id and date informations
            */
            authRouter.get( '/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Check if identity is validated for security strategy
                if(req.user.isValidated) return sendApiSuccessResponse(res, Vocabulary.request.success, { _id: req.user._id, lastConnection: req.user.lastConnection })
                else return sendApiErrorResponse(res, Vocabulary.request.error, 'Identity not validated');
            });

            /**
             * GET Route to check identity token (for Angular AuthGuard)
             * @param passport: AuthStrategy => use the access token to check user identity
             * @param body: Object => password: String, newPassword: String
             * @callback => send user _id and date informations
            */
            authRouter.post( '/password', this.passport.authenticate('jwt', { session: false }), (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.changePassword, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    setPassword(req.body, req.user, res)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse) );
                };
            });
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return authRouter;
        };
    };
//

/*
Export
*/
    module.exports = AuthRouterClass;
//