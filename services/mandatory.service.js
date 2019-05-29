/* 
Definition
*/
    const Mandatories = {
        register: ['email', 'password'],
        idValidation: ['_id', 'password'],
        login: ['email', 'password'],
        changePassword: ['password', 'newPassword'],
    };
//

/* 
Export
*/
    module.exports = Mandatories;
//