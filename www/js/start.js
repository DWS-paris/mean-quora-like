/* 
Loader
*/
    // Wait for DOM content
    document.addEventListener('DOMContentLoaded', () => {
        // Declaration
        const sendResponseBtn = document.querySelector('#sendResponseBtn');
        const showQuestionBtn = document.querySelectorAll('.showQuestionBtn');

        /* 
        Activate form
        */
            // activateFormEdit();
        //

        /* 
        Activate button interactions
        */
            // Set edit question btn
            setEditQuestionBtn('.editQuestionBtn');
        //

        

        /* 
        Home page
        */
            if(showQuestionBtn === "2"){
                for(let item of showQuestionBtn){
                    item.addEventListener('click', () => {
                        // Change loader
                        openLoaderUX(
                            '#loaderMessage', 
                            '#loader', 
                            'Réponse enregistrée !',
                            '/question/' + parentItem.value
                        )
                    });
                }
            };
        //

        /* 
        Question Page
        */
            if(sendResponseBtn){
                sendResponseBtn.addEventListener('click', event => {
                    // Prevent default event
                    event.preventDefault()

                    // Open popin Add Response
                    openPopinUX(document.querySelector('#headerResponse'))
                });
            };
        //


        setLoader(document.querySelector('#loader'), document.querySelector('#loaderMessage'));

        setHeadlineQuestion('.headlineQuestionPublic');
        setHeadlineQuestion('.headlineReponsePublic');

        setAddResponseBtn('.showQuestionBtn', '#parentItem');
        setAddUserLikeInteraction('.interactionBtn')


        if(document.querySelector('.grid')){
            FlexMasonry.init('.grid', {
                breakpointCols: {
                    'min-width: 1000px': 4,
                    'min-width: 850px': 3,
                    'min-width: 650px': 2,
                }
            });
        }

        if(document.querySelector('.grid.response')){
            FlexMasonry.init('.grid.response', {
                breakpointCols: {
                    'min-width: 950px': 3,
                    'min-width: 650px': 2,
                }
            });
        }

        
    })
//