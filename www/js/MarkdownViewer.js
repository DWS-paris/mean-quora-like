class MarkdownViewer {
    // Instanciate
    constructor(tag, i){
        this.tag = tag;
        this.i = i;
    }
    
    convert(){
        let htmlFromMarkdown = marked(document.querySelectorAll(this.tag)[this.i].textContent)
        document.querySelectorAll(this.tag)[this.i].innerHTML = htmlFromMarkdown
    }
    
}