/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password', 'pseudo'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        question: ['headline', 'about'],
        comment: ['headline', 'parentItem'],
        like: ['about'],
        changePassword: ['password', 'newPassword'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//