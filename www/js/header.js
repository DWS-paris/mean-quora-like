// Set initial
let askQuestionFormIsOpen = false;
            
// Wait for DOM content
document.addEventListener('DOMContentLoaded', () => {

    // Definition
    const askQuestionBtn = document.querySelector('#askQuestionBtn');
    const headerForm = document.querySelector('#headerForm');
    const headerResponse = document.querySelector('#headerResponse');
    const headerEdit = document.querySelector('#headerEditForm');
    const closeButtons = document.querySelectorAll('.closeButtonFormButton');
    const hrefLink = document.querySelectorAll('.rightLink a')
    const categoryLink = document.querySelectorAll('ul#categoryList li')

    // Methods
    const toggleAskQuestionForm = () => {

        if(askQuestionBtn){
            askQuestionBtn.addEventListener('click', event => {
                event.preventDefault()

                if(askQuestionFormIsOpen){
                    closePopinUX(headerForm)
                    askQuestionFormIsOpen = false;
                }
                else{
                    openPopinUX(headerForm)
                    askQuestionFormIsOpen = true
                }
            })
        }
    }

    const closePopIn = () => {
        for( let item of closeButtons ){
            item.addEventListener('click', () => {

                switch(item.getAttribute('id')){
                    case 'closeFromQuestion':
                    closePopinUX(headerForm)
                    askQuestionFormIsOpen = false;
                    break;

                    case 'closeFromResponse':
                    closePopinUX(headerResponse)
                    break;

                    case 'closeFromEdit':
                    closePopinUX(headerEdit, true)
                    break;

                    default:
                    break;
                }
            })
        }
    }

    const changeHrefLocation = () => {
        for( let item of hrefLink ){
            item.addEventListener('click', event => {
                event.preventDefault();

                // Change loader
                openLoaderUX(
                    '#loaderMessage', 
                    '#loader', 
                    'Redirection...',
                    item.getAttribute('href')
                )
            })
        }
    }

    const showCategoryPage = () => {
        for( let item of categoryLink ){
            item.addEventListener('click', () => {
                // Change loader
                openLoaderUX(
                    '#loaderMessage', 
                    '#loader', 
                    'Redirection...',
                    item.getAttribute('data-item') === '/' ? `/` : `/category/${item.getAttribute('data-item')}`
                )
            })
        }
    }
    
    
    // Start interface
    toggleAskQuestionForm();
    closePopIn();
    changeHrefLocation();
    showCategoryPage();
})