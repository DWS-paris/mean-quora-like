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
    const commentSchema = new Schema({
        // Schema.org
        '@context' : { type: String, default: 'http://schema.org' },
        '@type' : { type: [ String ], default: ['Comment'] },
        'contentRating' : { type: [ Number ], default: 0 },

        // Object data
        headline: String,
        parentItem: String,
        author: String,
        datePublished: Date,
        like: [String],
        dislike: [String],
        datePublished: Date
    })
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const CommentModel = mongoose.model('comment', commentSchema);
    module.exports = CommentModel;
//