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
                headerForm.classList.remove('open');
                askQuestionFormIsOpen = false;
            }
            else{
                headerForm.classList.add('open');
                askQuestionFormIsOpen = true
            }
        })
    }

    const closePopIn = () => {
        closeButtonFormQuestion.addEventListener('click', () => {
            headerForm.classList.remove('open');
            askQuestionFormIsOpen = false;
        })
    }
    
    // Start interface
    toggleAskQuestionForm();
    closePopIn();
})