/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
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
                res.render('index')
            });

            frontRouter.get( '/register', (req, res) => {
                res.render('register')
            });

            frontRouter.get( '/login', (req, res) => {
                res.render('login')
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