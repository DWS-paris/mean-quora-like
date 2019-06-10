/*
Import
*/
    const IdentityModel = require('../../models/identity.model')
    const Models = require('../../models/index')
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
//

/*
Methods
*/
    /**
     * Register new identity and user
     * @param body => email: String (unique), password: String
    */
    const register = body => {
        
        return new Promise( (resolve, reject) => {
            // Search user by email
            IdentityModel.findOne( { email: body.email }, (error, user) => {
                if(error) {
                    return reject(error) // Mongo Error
                }
                else if(user){
                    return reject('Identity already exist')
                }
                else{
                    console.log(body)
                    // Encrypt user password
                    bcrypt.hash( body.password, 10 )
                    .then( hashedPassword => {
                        // Replace pasword
                        const clearPassword = body.password;
                        body.password = hashedPassword;

                        // Set creation and connection date
                        body.creationDate = new Date();
                        body.lastConnection = null;
                        body.isValidated = true;

                        // Register new user
                        IdentityModel.create(body)
                        .then( mongoResponse => resolve({ _id: mongoResponse._id, creationDate: mongoResponse.creationDate }))
                        .catch( mongoResponse => reject(mongoResponse) )
                    })
                    .catch( hashError => reject(hashError) );
                };
            });
            
        });
    };

    /**
     * Confirm user identity before login
     * @param body: Object => _id: String, password: String
    */
    const confirmIdentity = body => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            IdentityModel.findById( body._id, (error, user) => {
                if(error) return reject(error)
                else if(!user) return reject('Unknow identity')
                else{
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) return reject('Password not valid')
                    else {
                        // Change identity state
                        user.isValidated = true;

                        // Save identuty state
                        user.save()
                        .then( mongoResponse => resolve(mongoResponse) )
                        .catch( mongoResponse => reject(mongoResponse) )
                    };
                }
            } )
        })
    };

    /**
     * Login user
     * @param body: Object => email: String, password: String
    */
    const login = (body, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            IdentityModel.findOne( { email: body.email }, (error, user) => {
                if(error) reject(error)
                else if(!user) reject('Unknow identity')
                else{
                    if( !user.isValidated ){
                        return reject('Account is not validated')
                    }
                    else{
                        // Check password
                        const validPassword = bcrypt.compareSync(body.password, user.password);
                        if( !validPassword ) reject('Password is not valid')
                        else {
                            // Set cookie
                            res.cookie(process.env.COOKIE_NAME, user.generateJwt(user), { httpOnly: true });
                            
                            // Define user last connection
                            const lastConnection = user.lastConnection;

                            // Set user new connection
                            user.lastConnection = new Date();

                            // Save new connection
                            user.save( (error, user) => {
                                if(error) return reject(error)
                                else{
                                    return resolve({ _id: user._id, creationDate: user.creationDate, lastConnection: lastConnection });
                                };
                            });
                        };
                    };
                };
            });
        });
    };

    /**
     * Login user
     * @param body: Object => email: String, password: String
    */
    const jwtDecoder = (req) => {
            if (req.cookies[process.env.COOKIE_NAME] != undefined){
                const decoded = jwt.verify(req.cookies[process.env.COOKIE_NAME], process.env.JWT_SECRET)
                return decoded._id
            }
            else {
                return false
            }
    };

    /**
     * Login user
     * @param body: Object => email: String, password: String
    */
    const getUserDataFromToken = (req) => {
        return new Promise( async (resolve, reject) => {
            
            const identity = await Models.identity.find({ _id: req.user._id })
            const questions = await Models.question.find({ "author.identifier": req.user._id })
            const responses = await Models.response.find({ "author.identifier": req.user._id })
            const likes = await Models.like.find({ "author.identifier": req.user._id })

            // Set empty collection
            let userQuestions = [];
            let userResponses = [];
            let userLikes = [];

            // Fetch _id collection
            ((async function loop() {
                for (let i = 0; i < questions.length; ++i) {
                    questions[i].like = await Models.like.find( { about: questions[i]._id, value: true } )
                    questions[i].dislike = await Models.like.find( { about: questions[i]._id, value: false } )
                    let responses = await Models.response.find( { parentItem: questions[i]._id } )
    
                    // return all data
                    userQuestions.push({ question: questions[i], responses: responses })
                }

                for (let i = 0; i < responses.length; ++i) {
                    responses[i].like = await Models.like.find( { about: responses[i]._id, value: true } )
                    responses[i].dislike = await Models.like.find( { about: responses[i]._id, value: false } )
                    let question = await Models.question.findById( responses[i].parentItem )
    
                    // return all data
                    userResponses.push({ response: responses[i], question: question })
                }

                for (let i = 0; i < likes.length; ++i) {
                    let likeAbout = null
                    if(likes[i].type === 'question'){
                        likeAbout = await Models.question.find({ _id: likes[i].about })
                    }
                    if(likes[i].type === 'response'){
                        likeAbout = await Models.response.find({ _id: likes[i].about })
                    }
                    
                    // return all data
                    userLikes.push({ like: likes[i], about: likeAbout })
                }

                return resolve({ identity, userQuestions, userResponses, userLikes })
            })());

        })
        
    };

    /**
     * Set user password
     * @param body: Object => password: String, newPassword: String
    */
    const setPassword = (body, authUser, res) => {
        return new Promise( (resolve, reject) => {
            // Search user by email
            IdentityModel.findById( authUser._id, (error, user) => {
                
                if(error) reject(error)
                else if(!user) reject('Unknow identity')
                else{
                    
                    // Check password
                    const validPassword = bcrypt.compareSync(body.password, user.password);
                    if( !validPassword ) return reject('Password not valid')
                    else {
                        
                        // Encrypt user password
                        bcrypt.hash( body.newPassword, 10 )
                        .then( hashedPassword => {
                            // Set new password
                            user.password = hashedPassword;
                            
                            // Set cookie
                            res.cookie(process.env.COOKIE_NAME, user.generateJwt(), { httpOnly: true });

                            // Save new password
                            user.save( (error, user) => {
                                if(error) return reject(error)
                                else{
                                    return resolve({ _id: user._id, creationDate: user.creationDate, lastConnection: user.lastConnection });
                                };
                            });
                        })
                        .catch( hashError => reject(hashError) );
                    };
                };
            });
        });
    };

/*
Export
*/
    module.exports = {
        register,
        confirmIdentity,
        login,
        setPassword,
        jwtDecoder,
        getUserDataFromToken
    }
//