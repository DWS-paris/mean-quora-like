/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const likeSchema = new Schema({
        about: String,
        type: String,
        value: Boolean,
        author: {
            additionalName: String,
            identifier: String
        },
        datePublished: Date
    })
//

/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const LikeModel = mongoose.model('like', likeSchema);
    module.exports = LikeModel;
//