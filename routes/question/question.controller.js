/*
Import
*/
    const Vocabulary = require('../../services/vocabulary.service');
    const { findOneRejectOrCreate, findOneAndPushId, findOneAndAddId, findOneAndDelete, fetchSingle, fetchAll, findAll, getResponseComment } = require('../main.controller');
    const CommentModel = require('../../models/comment.model');
//

/*
Methods
*/
    // Method to create new item
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            /* Define server data */
                req.body.image = 'http://lorempixel.com/800/800/abstract/' + Math.floor(Math.random() * 10 + 1);
                req.body.datePublished = new Date();
                let questionData = Object.assign(req.body, {author: { additionalName: req.user.pseudo, _id: req.user._id }})
                req.body = questionData

                // console.log(req.body)
            //
            /**
             * Call findOneRejectOrCreate method
             * @param req: Request => The client request
             * @param model: String => The document model
             * @param requestOptions: Object => The option to check if exist
             */
                findOneRejectOrCreate(req, 'question', { headline: req.body.headline } )
                .then( item => resolve( item ))
                .catch( error => reject( error ));
            //
        });
    };

    // Method to fetch all items
    const listItems = () => {
        return new Promise( (resolve, reject) => {
            /**
             * Call findAll method
             * @param model: String => The document model
             */
                findAll('question')
                .then( items => resolve( items ))
                .catch( error => reject( error ));
            //
        })
    };
    
    const readItem = () => {
        return new Promise( (resolve, reject) => {
            findAll('question')
            .then( questions => {
                // Set empty collection
                let dataArray = [];

                // Fetch _id collection
                ((async function loop() {
                    for (let i = 0; i < questions.length; ++i) {
                        const comments = await CommentModel.find( { parentItem: questions[i]._id } )
                        questions[i].comment = comments;

                        dataArray.push({ question: questions[i], comments : comments })
                    }
                    // return all data
                    return resolve(dataArray);
                })());
            })
            .catch( error => reject( error ));
        })
    };

    const readOneItem = (_id) => {
        return new Promise( (resolve, reject) => {
            fetchSingle(_id, 'question')
            .then( async question => {
                const comments = await CommentModel.find( { parentItem: _id } )
                
                // return all data
                return resolve({ question, comments });
            })
            .catch( error => reject( error ));
        })
    };

    const updateItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    };

    const deleteItem = () => {
        return new Promise( (resolve, reject) => {
            
        })
    };
//

/*
Export
*/
    module.exports = {
        createItem,
        listItems,
        readItem,
        readOneItem,
        updateItem, 
        deleteItem
    }
//
