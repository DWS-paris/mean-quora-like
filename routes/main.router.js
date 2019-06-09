/*
Imports
*/
    // NodeJS
    const { Router } = require('express');
    const passport = require('passport');

    // Authentication
    const { setAuthentication } = require('../services/auth.service');
    setAuthentication(passport);

    // Routers
    const AuthRouterClass = require('./auth/auth.router');
    const FrontRouterClass = require('./front/front.router');
    const QuestionRouterClass = require('./question/question.router');
    const ResponseRouterClass = require('./response/response.router');
    const LikeRouterClass = require('./like/like.router');
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
    mainRouter.use('/api', apiRouter);


    // Child
    const authRouter = new AuthRouterClass({ passport });
    const frontRouter = new FrontRouterClass({ passport });
    const questionRouter = new QuestionRouterClass({ passport });
    const responseRouter = new ResponseRouterClass({ passport });
    const likeRouter = new LikeRouterClass({ passport });
//

/*
Configure routes
*/
    // Set API routers
    apiRouter.use('/auth', authRouter.init());
    apiRouter.use('/question', questionRouter.init());
    apiRouter.use('/response', responseRouter.init());
    apiRouter.use('/like', likeRouter.init());

    // Set front router
    mainRouter.use('/', frontRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//