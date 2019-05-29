// Set initial
let askQuestionFormIsOpen = false;
            
// Wait for DOM content
document.addEventListener('DOMContentLoaded', () => {

    // Definition
    const askQuestionBtn = document.querySelector('#askQuestionBtn');
    const headerForm = document.querySelector('#headerForm');
    const closeButtonFormQuestion = document.querySelector('#closeButtonFormQuestion');

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
        closeButtonFormQuestion.addEventListener('click', () => {
            closePopinUX(headerForm)
            askQuestionFormIsOpen = false;
        })
    }
    
    // Start interface
    toggleAskQuestionForm();
    closePopIn();
})