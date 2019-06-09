const setFormquestion = (_myFormQuestion, _questionCategory, _questionFormMarkdown) => {
    _myFormQuestion.addEventListener('submit', event => {
        // Stop default to use Javascript
        event.preventDefault();

        // Set error checker
        let formError = 0;

        // Set form value
        let categorySelect = new FormValue(_questionCategory.value, 'select')
        let questionMarkdown = new FormValue(_questionFormMarkdown.getValue(), 'input')

        // Check mandatories
        categorySelect.checkString('NULL') ? formError++ : undefined;
        questionMarkdown.checkLength(20) ? formError++ : undefined;

        // Check form error
        if( formError === 0 ){
            // Display loader
            openLoaderUX(
                '#loaderMessage', 
                '#loader', 
                'Enregistrement du message...'
            )

            // Use asyncFetch method to save data
            asyncFetch('/api/question', 'POST', { headline:  _questionFormMarkdown.getValue(), about: _questionCategory.value })
            .then( data => {
                // Change loader
                openLoaderUX(
                    '#loaderMessage', 
                    '#loader', 
                    'Question enregistrée !',
                    '/'
                )
            })
            .catch( err => {
                // Change loader
                changeLoaderUX(
                    '#loaderMessage', 
                    '#loader', 
                    err.status === 500 ? 'La question à déjà été posée...' : 'Problème réseeau merci de recommencer',
                    null
                ) 
            } )
        }
    })
}


const activateFormEdit = (_formTag, _headlineEditForm, _idEditForm) => {
    // Get form submition
    _formTag.addEventListener('submit', event => {
        // Prevent default event
        event.preventDefault();

        // Set error checker
        let formError = 0;

        // Set form value
        let headlineEditForm = new FormValue(document.querySelector('#hiddenHeadlineEditForm').value, 'input')
        let idEditForm = new FormValue(document.querySelector('#idEditForm').value, 'input')

        // Check mandatories
        headlineEditForm.checkLength(20) ? formError++ : undefined;
        idEditForm.checkLength(10) ? formError++ : undefined;

        // Check form error
        if( formError === 5 ){
            // Display loader
            openLoaderUX(
                '#loaderMessage', 
                '#loader', 
                'Modification de la question...'
            )

            // Use asyncFetch method to save data
            asyncFetch(`/api/question/${idEditForm}`, 'PUT', { headline:  questionFormMarkdown.getValue(), about: questionCategory.value })
            .then( data => {
                // Change loader
                openLoaderUX(
                    '#loaderMessage', 
                    '#loader', 
                    'Question modifiée !',
                    '/'
                )
            })
            .catch( err => {
                // Change loader
                changeLoaderUX(
                    '#loaderMessage', 
                    '#loader', 
                    'Problème réseeau merci de recommencer...',
                    null
                ) 
            } )
        }

    })
}