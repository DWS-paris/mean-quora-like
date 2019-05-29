/* 
Definition
*/
    const cleanUp = (object, required) => {
        let cleanObject = {  };

        for (const prop in object) {
            if(required.indexOf(prop) >= 0) cleanObject[prop] = object[prop];
        };

        return cleanObject;
    };
//

/* 
Export
*/
    module.exports = cleanUp;
//