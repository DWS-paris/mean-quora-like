/* 
Methode to use fetch reequests
*/
    const asyncFetch =  ( url, type = 'GET', data = undefined ) => {

        return new Promise( async (resolve, reject) => {
            if( type === 'GET' ){
                // Define request
                const response = await fetch(url);

                // Check response
                if( response.ok ) {
                    const jsonResponse = await response.json();
                    return resolve(jsonResponse)
                }
                else {
                    return reject(response)
                }
            }
            
            else if( type === 'POST' ){
                // Define request
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })

                // Check response
                if( response.ok ) {
                    const jsonResponse = await response.json();
                    return resolve(jsonResponse)
                }
                else {
                    return reject(response)
                }
            }
        })
    }
//

/* 
Methode to open a popin
*/
const openPopinUX =  ( htmlTag ) => {
    htmlTag.classList.add('display');

    setTimeout( () => {
        htmlTag.classList.add('open');
    }, 10)
}
//

/* 
Methode to close a popin
*/
const closePopinUX =  ( htmlTag ) => {
    htmlTag.classList.remove('open');

    setTimeout( () => {
        htmlTag.classList.remove('display');
    }, 300)
}
//