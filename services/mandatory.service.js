/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'pseudo'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        question: ['headline', 'about'],
        questionEdit: ['headline'],
        comment: ['headline', 'parentItem'],
        responseEdit: ['headline'],
        like: ['about'],
        changePassword: ['password', 'newPassword'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//