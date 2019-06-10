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
        like: ['about', 'type'],
        changePassword: ['password', 'newPassword'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//