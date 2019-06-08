/*
Import
*/
    const Vocabulary = require('../../services/vocabulary.service');
    const { findOneRejectOrCreate, findOneAndPushId, findOneAndAddId, findOneAndDelete, fetchSingle, fetchAll, findAll, getResponseComment } = require('../main.controller');
    const CommentModel = require('../../models/comment.model');
    const LikeModel = require('../../models/like.model');
//

/*
Methods
*/
    // Method to create new item
    const createItem = (req) => {
        
        return new Promise( (resolve, reject) => {
            console.log(req.user._id)
            /* Define server data */
                req.body.author = req.user.pseudo;
                req.body.image = 'http://lorempixel.com/600/300/abstract/' + Math.floor(Math.random() * 10 + 1);
                req.body.datePublished = new Date();
            //
            console.log(req.body)
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
                        const likesUp = await LikeModel.find( { about: questions[i]._id, value: true } )
                        const likesDown = await LikeModel.find( { about: questions[i]._id, value: false } )
                        questions[i].comment = comments;
                        questions[i].like = likesUp.map(item => item.author)
                        questions[i].dislike = likesDown.map(item => item.author)
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
                // Get question comments and like/dislike
                const comments = await CommentModel.find( { parentItem: _id } );
                const questionLikes = await LikeModel.find( { about: _id } );
                
                // Define question like/dislike
                questionLikes.map( item => item.value ? question.like.push(item.author) : question.dislike.push(item.author) );

                // Set empty collection
                let dataArray = [];

                // Fetch _id collection
                ((async function loop() {
                    for (let i = 0; i < comments.length; ++i) {

                        // Get comment like/dislike
                        const commentLikes = await LikeModel.find( { about: comments[i]._id } );
                        
                        // Define comment like/dislike
                        commentLikes.map( item => item.value ? comments[i].like.push(item.author) : comments[i].dislike.push(item.author) );

                        // Return comment data
                        dataArray.push(comments[i])
                    }

                    // return all data
                    return resolve({ question: question, comments: dataArray });
                })());
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
