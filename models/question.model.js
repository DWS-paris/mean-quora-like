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
    const questionSchema = new Schema({
        // Schema.org
        '@context' : { type: String, default: 'http://schema.org' },
        '@type' : { type: [ String ], default: ['ScholarlyArticle'] },
        'image' : { type: [ String ], default: 'http://lorempixel.com/600/300/abstract/' },

        // Object data
        headline: String,
        about: String,
        auhor: String,
        isValidated: Boolean,
        datePublished: Date
    })
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const QuestionModel = mongoose.model('question', questionSchema);
    module.exports = QuestionModel;
//