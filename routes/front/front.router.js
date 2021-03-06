/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
    const jwt = require('jsonwebtoken');
    const { jwtDecoder, getUserDataFromToken } = require('../auth/auth.controller');
    const { createItem, listItems, readItem, readOneItem, updateItem, deleteItem } = require('../question/question.controller')
    const Model = require('../../models/index');
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
                readItem()
                .then( questionData => {
                    // Render view and check if user is logged
                    res.render('index', { isLogged: jwtDecoder(req), data: questionData, slug: '/' })
                })
                .catch( error => {
                    // Render view and check if user is logged
                    res.render('index', { isLogged: jwtDecoder(req), data: [], slug: '/' })
                })
            });

            frontRouter.get( '/question/:id', (req, res) => {
                // Get question lists
                readOneItem(req.params.id)
                .then( questionData => {
                    // Render view and check if user is logged
                    res.render('question', { isLogged: jwtDecoder(req), data: questionData, slug: '/question', id: req.params.id })
                })
                .catch( error => {
                    // Render view and check if user is logged
                    res.render('question', { isLogged: jwtDecoder(req), data: [], slug: '/question', id: req.params.id})
                })
            });

            frontRouter.get( '/category/:slug', (req, res) => {
                Model.question.find({ about: req.params.slug }, (err, questions) => {
                    if(err){
                        return res.render('category', { isLogged: jwtDecoder(req), data: [], slug: req.params.slug.toUpperCase() })
                    }
                    else{
                        // Set empty collection
                        let dataArray = [];

                        // Fetch _id collection
                        ((async function loop() {
                            for (let i = 0; i < questions.length; ++i) {
                                const response = await Model.response.find( { parentItem: questions[i]._id } )
                
                                // return all data
                                dataArray.push({ question: questions[i], response: response })
                            }
                            console.log(dataArray)
                            // return all data
                            return res.render('category', { isLogged: jwtDecoder(req), data: dataArray, slug: req.params.slug.toUpperCase() })
                        })());
                    }
                })
            });

            frontRouter.get( '/register', (req, res) => {
                // Render view, user is unlogged
                res.render('register', { isLogged: false, data: [], slug: 'register' })
            });

            frontRouter.get( '/login', (req, res) => {
                // Render view, user is unlogged
                res.render('login', { isLogged: false, data: [], slug: 'login' })
            });

            frontRouter.get( '/logout', (req, res) => {
                // Delete cookie
                res.clearCookie(process.env.COOKIE_NAME)
                
                // Redirection to homepage view
                res.redirect('/')
            });

            frontRouter.get( '/me', this.passport.authenticate('jwt', { session: false }), (req, res) => {

                getUserDataFromToken(req)
                .then( userData => {
                    console.log(userData)
                    res.render('me', { isLogged: true, data: userData, slug: 'me' })
                })
                .catch( err => {
                    res.render('me', { isLogged: true, data: err, slug: 'me' })
                })

                // Render view, user is unlogged
                
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