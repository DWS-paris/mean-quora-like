// Set initial
let askQuestionFormIsOpen = false;
            
// Wait for DOM content
document.addEventListener('DOMContentLoaded', () => {

    // Definition
    const askQuestionBtn = document.querySelector('#askQuestionBtn');
    const headerForm = document.querySelector('#headerForm');
    const headerResponse = document.querySelector('#headerResponse');
    const closeButtons = document.querySelectorAll('.closeButtonFormButton');

    // Methods
    const toggleAskQuestionForm = () => {
        
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
    
    // Start interface
    toggleAskQuestionForm();
    closePopIn();
})