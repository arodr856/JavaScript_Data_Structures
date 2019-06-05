const Node = require('./Node');

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNode(node){
        if(this.head === null){
            this.head = node;
            this.size++;
        }else{
           if(this.tail === null){
               this.tail = node;
               this.tail.previous = this.head;
               this.head.next = this.tail;
               this.size++;
           }else{
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
                this.size++;
           }
        }
    }

    print(){
        let currNode = this.head;
        if(currNode === null){
            console.log('Linked List is currently empty. . .');
        }else{
            while(currNode !== null){
                console.log(currNode.value);
                currNode = currNode.next;
            }
        }
        
    }

}

module.exports = LinkedList;