class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }

    getValue(){
        return this.value;
    }

    setValue(val){
        this.value = value;
    }

}

module.exports = Node;