/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
    const jwt = require('jsonwebtoken');
    const { jwtDecoder } = require('../auth/auth.controller');
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
                // Render view and check if user is logged
                res.render('index', jwtDecoder(req))
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