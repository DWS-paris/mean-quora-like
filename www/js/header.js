// Set initial
let askQuestionFormIsOpen = false;
            
// Wait for DOM content
document.addEventListener('DOMContentLoaded', () => {

    // Definition
    const askQuestionBtn = document.querySelector('#askQuestionBtn');
    const headerForm = document.querySelector('#headerForm');
    const headerResponse = document.querySelector('#headerResponse');
    const closeButtons = document.querySelectorAll('.closeButtonFormButton');
    const hrefLink = document.querySelectorAll('.rightLink a')

    // Methods
    const toggleAskQuestionForm = () => {

        if(askQuestionBtn){
            askQuestionBtn.addEventListener('click', () => {
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
    
    
    // Start interface
    toggleAskQuestionForm();
    closePopIn();
    changeHrefLocation();
})