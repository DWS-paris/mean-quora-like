/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
    const jwt = require('jsonwebtoken');
    const { jwtDecoder } = require('../auth/auth.controller');
    const { createItem, listItems, readItem, updateItem, deleteItem } = require('../question/question.controller')
//

/*
Routes definition
*/
    class FrontRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){
            frontRouter.get( '/', (req, res) => {
                // Get question list
                listItems()
                .then( questionData => {
                    // Render view and check if user is logged
                    res.render('index', { isLogged: jwtDecoder(req), questions: questionData })
                })
                .catch( error => {
                    // Render view and check if user is logged
                    res.render('index', { isLogged: jwtDecoder(req), questions: [] })
                })
            });

            frontRouter.get( '/register', (req, res) => {
                // Render view, user is unlogged
                res.render('register', { isLogged: false })
            });

            frontRouter.get( '/login', (req, res) => {
                // Render view, user is unlogged
                res.render('login', { isLogged: false })
            });

            frontRouter.get( '/logout', (req, res) => {
                // Delete cookie
                res.clearCookie(process.env.COOKIE_NAME)
                
                // Redirection to homepage view
                res.redirect('/')
            });
        };

        // POST api/auth/login
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return frontRouter;
        };
    };
//

/*
Export
*/
    module.exports = FrontRouterClass;
//