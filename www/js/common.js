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

            else if( type === 'PUT' ){
                // Define request
                const response = await fetch(url, {
                    method: 'PUT',
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
            // document.querySelector(parentItem).setAttribute('value', item.getAttribute('id-data'))

            // Change loader
            openLoaderUX(
                '#loaderMessage', 
                '#loader', 
                'Redirection...',
                '/question/' + item.getAttribute('id-data')
            )
        })
    }
}
//



/* 
Method to set AddUserLikeInteraction
*/
const setAddUserLikeInteraction = (buttons) => {
    // Loop on all {{tag}} to activate response button
    for( let item of document.querySelectorAll(buttons) ){
        item.addEventListener('click', event => {
            // Prevent form event
            event.preventDefault()

            // Set question ID
            let likeId = item.getAttribute('id-data');
            
            // Check if user can click
            if(!item.classList.contains('likeUserNoInteraction')){
                asyncFetch('/api/like', 'POST', { about: likeId })
                .then( () => {
                    // Declaration
                    let likeValue = item.classList.contains('like' + likeId) ? 'Like' : 'Dislike';
                    let nLike = parseInt(document.querySelector(`[id-data="like-${likeId}"] b`).textContent)
                    
                    // Get interaction type
                    switch(likeValue){
                        case 'Like':
                            // Add one like
                            document.querySelector(`[id-data="like-${likeId}"] b`).textContent = ++nLike
    
                            // Toggle likeUserInteraction class
                            document.querySelector(`.like${likeId}`).classList.remove('likeUserInteraction')
                            document.querySelector(`.like${likeId}`).classList.add('likeUserNoInteraction')
                            // Toggle likeUserNoInteraction class
                            document.querySelector(`.dislike${likeId}`).classList.remove('likeUserNoInteraction')
                            document.querySelector(`.dislike${likeId}`).classList.add('likeUserInteraction')
                        break;
    
                        default:
                            // Delete one like
                            document.querySelector(`[id-data="like-${likeId}"] b`).textContent = --nLike
    
                            // Toggle likeUserInteraction class
                            document.querySelector(`.dislike${likeId}`).classList.remove('likeUserInteraction')
                            document.querySelector(`.dislike${likeId}`).classList.add('likeUserNoInteraction')
                            // Toggle likeUserNoInteraction class
                            document.querySelector(`.like${likeId}`).classList.remove('likeUserNoInteraction')
                            document.querySelector(`.like${likeId}`).classList.add('likeUserInteraction')
                        break;
                    }
    
                })
                .catch( apiResponse => {
                    console.error(apiResponse)
                } )
            }


            
            
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

    // Wait .1s
    setTimeout( () => {
        // Show loader GIF
        loader.classList.add('open');
        // Wait .3s
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
        }, 300 )
    }, 100 )
}
//


/* 
Method to set edit question btn
*/
    const setEditQuestionBtn = (btnTag) => {
        // Get HTML tags
        const editQuestionBtns = document.querySelectorAll(btnTag);

        // Set event
        for( let item of editQuestionBtns) {
            item.addEventListener('click', event => {
                // Prevent default event
                event.preventDefault();

                // Set question data
                const questionId = item.getAttribute('data-id');
                const quectionMarkdown =  document.querySelector(`#question-${questionId}`).value;
                
                // Set edit form
                setEditQuestionForm(questionId, quectionMarkdown)
            })
        }
    }
//

/* 
Method to set edit question form
*/
    const setEditQuestionForm = (_questionId, _quectionMarkdown) => {
        // Add _id in the form
        document.querySelector('#idEditForm').value = _questionId;
        document.querySelector('#hiddenHeadlineEditForm').value = _quectionMarkdown;

        // Add content in the form
        const editFormMarkdown = new MarkdownEditor('#headlineEditForm', true, null);
        editFormMarkdown.setMarkdownEditor();
        editFormMarkdown.newSimpleMDE.value(_quectionMarkdown);

        // Open popin form
        openPopinUX(document.querySelector('#headerEditForm'));

        /* 
        Get form submit
        */
            document.querySelector('#headerEditForm').addEventListener('submit', event => {
                // Prevent default event
                event.preventDefault();

                // Set error checker
                let formError = 0;

                // Set form value
                let questionMarkdownId = new FormValue(_questionId, 'input');
                let questionMarkdownEdited = new FormValue(editFormMarkdown.getValue(), 'input');

                // Check mandatories
                questionMarkdownId.checkLength(20) ? formError++ : undefined;
                questionMarkdownEdited.checkLength(20) ? formError++ : undefined;

                // Check form error
                if( formError === 0 ){
                    // Display loader
                    openLoaderUX(
                        '#loaderMessage', 
                        '#loader', 
                        'Enregistrement de la modification...'
                    )

                    // Use asyncFetch method to save data
                    asyncFetch(`/api/question/${_questionId}`, 'PUT', { headline:  editFormMarkdown.getValue() })
                    .then( data => {
                        console.log(data)
                        // Change loader
                        openLoaderUX(
                            '#loaderMessage', 
                            '#loader', 
                            'Modification enregistrée !',
                            '/'
                        )
                    })
                    .catch( err => {
                        console.log(err)
                        // Change loader
                        changeLoaderUX(
                            '#loaderMessage', 
                            '#loader', 
                            'Problème réseeau merci de recommencer',
                            null
                        ) 
                    } )
                }
            })
        //
    }
//