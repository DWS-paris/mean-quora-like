/* 
Definition
*/
    const Vocabulary = {
        request: {
            success: 'Request succeed',
            error: 'Request failed'
        },

        errors: {
            noKnow: 'No body data provided',
            noBody: 'No body data provided',
            badFields: 'Bad fields provided',
            notNew: 'Item already exist',
            notAllowed: 'Request not allowed',
        },

        auth: {
            notNew: 'Identity already exist',
            unknow: 'Unknow identity',
            passwordError: 'Password not valid',
            accountError: 'Account is not validated',
        }
    }
//

/* 
Export
*/
    module.exports = Vocabulary;
//