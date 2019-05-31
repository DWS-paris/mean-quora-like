class FormValue {
    // Instanciate
    constructor(input, type){
        this.input = input;
        this.type = type;
    }
    

    // Method to check form value
    checkValue(option){
        if( this.type === 'select' ) this.checkString(option)
        else if( this.type === 'input' ) this.checkLength(option)
    }

    // Method to check string value
    checkString(option){
        return this.input.value === option ? true : false;
    }

    // Method to check length of value
    checkLength(option){
        return this.input.length < option ? true : false;
    }
}