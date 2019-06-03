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
Method to set HeadlineQuestion
*/
const setHeadlineQuestion = (tag) => {
    // Loop on all {{tag}} to activate SimpleMDE
    for( let i = 0; i <  document.querySelectorAll(tag).length; i++ ){
        // new MarkdownEditor(tag, false, i).setMarkdownEditor();
        new MarkdownViewer(tag, i).convert()
    }
}
//

/* 
Method to set AddResponseBtn
*/
const setAddResponseBtn = (buttons, parentItem) => {
    // Loop on all {{tag}} to activate response button
    for( let item of document.querySelectorAll(buttons) ){
        item.addEventListener('click', () => {
            // Set form header
            document.querySelector(parentItem).setAttribute('value', item.getAttribute('id-data'))

            // Open popin
            openPopinUX(document.querySelector('#headerResponse'))
        })
    }
}
//

/* 
Method to set Loader
*/
const setLoader = (loader, loaderMessage) => {
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
//


/* 
Loader
*/
    // Wait for DOM content
    document.addEventListener('DOMContentLoaded', () => {
        setLoader(document.querySelector('#loader'), document.querySelector('#loaderMessage'));
        setHeadlineQuestion('.headlineQuestionPublic');
        setAddResponseBtn('.addResponseBtn', '#parentItem');


        if(document.querySelector('.grid')){
            FlexMasonry.init('.grid', {
                breakpointCols: {
                    'min-width: 1000px': 4,
                    'min-width: 850px': 3,
                    'min-width: 650px': 2,
                }
            });
        }

        
    })
//