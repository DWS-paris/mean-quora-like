/* 
Definition
The object Model{} is used in main.controller
You need to add a new propetry for each Mongoose schema
*/
    const Models = {
        identity: require('./identity.model'),
        question: require('./question.model'),
        response: require('./response.model'),
        like: require('./like.model')
    };
//

/* 
Export
*/
    module.exports = Models;
//