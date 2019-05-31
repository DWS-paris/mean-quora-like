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
Method to open loader
*/
const openLoaderUX = (theMessage = '#loaderMessage', theLoader = '#loader', msg = 'Open...', path = null,) => {
    let loaderMessage = document.querySelector(theMessage)
    let loader = document.querySelector(theLoader)

    // Display message
    loaderMessage.textContent = msg;

    // Display loader tag
    loader.classList.add('close');
    loader.classList.remove('hide');

    // Wait .3s
    setTimeout( () => {
        // Loaderr animation
        loader.classList.add('open');
        loader.classList.add('closed');
        loader.classList.remove('close');

        if(path !== null){
            // Wait .3s
            setTimeout( () => {
                // Change location
                location = path
            }, 300 )
        }
    }, 300 )
}
//

/* 
Method to change loadere
*/
const changeLoaderUX = (theMessage = '#loaderMessage', theLoader = '#loader', msg = 'Chargement...',  path = null,) => {
    let loaderMessage = document.querySelector(theMessage)
    let loader = document.querySelector(theLoader)

    // Display message
    loaderMessage.textContent = msg;

    // Display loader tag
    loader.classList.add('close');
    loader.classList.remove('hide');

    // Wait 1s
    setTimeout( () => {
        if(path !== null){
            // Wait .3s
            setTimeout( () => {
                // Change location
                location = path
            }, 300 )
        }
        else{
            // Wait .5s
            setTimeout( () => {
                // Wait .3s
                setTimeout( () => {
                    // Hide loader
                    loader.classList.remove('open');
                    loader.classList.add('close');
                    // Wait .3s
                    setTimeout( () => {
                        // Remove class
                        loader.classList.add('hide');
                        loader.classList.remove('close');
                    }, 300 )
                }, 300 )
            }, 500 )
        }
    }, 1000 )
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


/* 
Loader
*/
    // Wait for DOM content
    document.addEventListener('DOMContentLoaded', () => {

        /* 
        SimpleMDE
        */
            // Declaration
            const simpleMDEquestions = [];
            const headlineQuestionPublic = document.querySelectorAll('.headlineQuestionPublic');
            
            // Loop on all .headlineQuestionPublic to activate SimpleMDE
            for( let item of headlineQuestionPublic ){
                simpleMDEquestions.push( new SimpleMDE({ 
                    element: item,
                    toolbar: false,
                    status: false
                }))
            }

            // Loop on SimpleMDE array
            for( let item of simpleMDEquestions){
                // Change to preview mode
                item.togglePreview()
            }
        //

        /* 
        Display reponse popin
        */
            // Definition
            const addResponseBtn = document.querySelectorAll('.addResponseBtn');
            const questionInHtmlTag = document.querySelector('#questionInHtmlTag');

            // Set new SimpleMDE
            const headlineUnicQuestion = new SimpleMDE({ 
                toolbar: false,
                status: false
            })

            // Define methods
            const getOpenResponseForm = () => {

                for( let item of addResponseBtn ){
                    item.addEventListener('click', () => {
                        // Set form header
                        document.querySelector('#parentItem').setAttribute('value', item.getAttribute('id-data'))
                        questionInHtmlTag.innerHTML = headlineUnicQuestion.options.previewRender(item.getAttribute('id-question'));

                        // Open popin
                        openPopinUX(document.querySelector('#headerResponse'))
                    })
                }
            }

            // Launch method
            getOpenResponseForm();
        //

        /* 
        Loader
        */
            // Define method
            const showLoader = (loader = document.querySelector('#loader'), loaderMessage = document.querySelector('#loaderMessage')) => {
                // Display message
                loaderMessage.textContent = 'Chargement...';

                // Wait .3s
                setTimeout( () => {
                    // Show loader GIF
                    loader.classList.add('open');
                    // Wait 1s
                    setTimeout( () => {
                        // Close loader
                        loader.classList.add('close');
                        // Wait .3s
                        setTimeout( () => {
                            // Hide loader
                            loader.classList.add('hide');
                            // Wait .3s
                            setTimeout( () => {
                                // Remove class
                                loader.classList.remove('open');
                                loader.classList.remove('close');
                            }, 300 )
                        }, 300 )
                    }, 1000 )
                }, 300 )
            }

            // Launch method
            showLoader();
        //
    })
//