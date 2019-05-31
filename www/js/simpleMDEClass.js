class MarkdownEditor {
    // Instanciate
    constructor(tag, edit){
        this.tag = tag;
        this.edit = edit;
        this.newSimpleMDE = undefined
    }
    

    // Method to set MarkdownEditor
    setMarkdownEditor(){
        if(this.edit){
            this.newSimpleMDE = new SimpleMDE({ 
                element: document.querySelector(this.tag),
                status: false,
                toolbar: ['bold', 'italic', 'link', 'preview', 'unordered-list', 'ordered-list', 'side-by-side']
            });
        }
        else{
            this.newSimpleMDE = new SimpleMDE({ 
                element: document.querySelector(this.tag),
                status: false,
                toolbar: false
            });
            this.newSimpleMDE.togglePreview();
        }
    }

    // Methode to get SimpleMDE value
    getValue(){
        return this.newSimpleMDE.value()
    }
}