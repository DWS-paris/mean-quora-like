/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;

    // Javascript Web Token
    const jwt = require('jsonwebtoken');
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const responseSchema = new Schema({
        // Schema.org
        '@context' : { type: String, default: 'http://schema.org' },
        '@type' : { type: [ String ], default: ['Comment'] },
        'contentRating' : { type: [ Number ], default: 0 },

        // Object data
        headline: String,
        parentItem: String,
        datePublished: Date,
        like: [{
            additionalName: String,
            identifier: String
        }],
        dislike: [{
            additionalName: String,
            identifier: String
        }],
        datePublished: Date,
        author: {
            additionalName: String,
            identifier: String
        }
    })
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const ResponseModel = mongoose.model('response', responseSchema);
    module.exports = ResponseModel;
//