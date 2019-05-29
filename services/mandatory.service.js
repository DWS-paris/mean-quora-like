/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        question: ['headline', 'about'],
        comment: ['headline', 'parentItem'],
        changePassword: ['password', 'newPassword'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//