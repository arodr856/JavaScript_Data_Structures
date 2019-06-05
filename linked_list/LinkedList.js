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
            // this.size++;
        }else{
           if(this.tail === null){
               this.tail = node;
               this.tail.previous = this.head;
               this.head.next = this.tail;
            //    this.size++;
           }else{
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
                // this.size++;
           }
        }
        this.size++;
    } /* addNode */
    
    insert(index, node){
        if(index === 0){
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
            this.size++;
        }else{
            const tempNode = this.getNode(index);

            // set the next ref of the previous node for the node at the given index to the ref of the given node.
            tempNode.previous.next = node;
            // set the previous ref of the given node to the previous ref of the node at the given index.
            node.previous = tempNode.previous;

            // set the given nodes next ref to the node at the given index.
            node.next = tempNode;
            // set the previous ref of the node at the given index to the given node.
            tempNode.previous = node;
            this.size++;
        }
    } /* insert */ 

    delete(value){
        // get node to delete
        const deleteIndex = this.checkNode(value);
        console.log(deleteIndex)

        const tempNode = deleteIndex < 0 ? null : this.getNode(deleteIndex);

        if(tempNode !== null){
            if(tempNode == this.head){
                this.head = this.head.next;
                this.head.previous = null;
            }else if(tempNode == this.tail){
                this.tail = this.tail.previous;
                this.tail.next = null;
            }else{
                tempNode.previous.next =  tempNode.next;
                tempNode.next.previous = tempNode.previous;
            }
        }
    }

    getNode(index){
        let currNode = this.head;
        for(let i = 0; i <= index; i++){
            if(i === index){
                return currNode;
            }
            currNode = currNode.next;
        }
        return null;
    } /* getNode */

    checkNode(value){

        let currNode = this.head;

        for(let i = 0; i < this.size; i++){
            if(currNode.value === value){
                return i;
            }
            currNode = currNode.next;
        }
        return -1;
    }

    print(printExtra){
        let currNode = this.head;
        if(currNode === null){
            console.log('Linked List is currently empty. . .');
        }else{
            while(currNode !== null){
                let info = ''
                if(currNode == this.head){
                    info = !printExtra ? currNode.value : `current value: ${currNode.value}\nprev value: null\tnext value: ${currNode.next.value}`;
                }else{
                    const next = currNode.next === null ? 'null' : currNode.next.value;
                    info = !printExtra ? currNode.value : `current value: ${currNode.value}\nprev value: ${currNode.previous.value}\tnext value: ${next}`;
                }
                console.log(info + '\n');
                currNode = currNode.next;
            }
        }
        
    } /* print */

}

module.exports = LinkedList;
