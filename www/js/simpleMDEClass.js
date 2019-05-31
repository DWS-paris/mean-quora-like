class MarkdownEditor {
    // Instanciate
    constructor(tag, edit, i){
        this.tag = tag;
        this.edit = edit;
        this.i = i;
        this.newSimpleMDE = undefined
    }
    

    // Method to set MarkdownEditor
    setMarkdownEditor(){
        if(this.edit){
            this.newSimpleMDE = new SimpleMDE({ 
                element: document.querySelector(this.tag),
                status: false,
                toolbar: ['bold', 'italic', 'link', 'preview', 'unordered-list', 'ordered-list']
            });
        }
        else{
            this.newSimpleMDE = new SimpleMDE({ 
                element: document.querySelectorAll(this.tag)[this.i],
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