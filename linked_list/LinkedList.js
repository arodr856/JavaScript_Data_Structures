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
    } /* addNode */
    
    insert(index, node){
        if(index === 0){
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }else{
            const tempNode = this.getNode(index);
            // console.log(tempNode);

            tempNode.previous.next = node;
            node.previous = tempNode.previous;
            // console.log(tempNode);
            node.next = tempNode;
            tempNode.previous = node;

        }
    } /* insert */ 

    getNode(index){
        let currNode = this.head.next;
        for(let i = 1; i <= index; i++){
            if(i === index){
                return currNode;
            }
            currNode = currNode.next;
        }
        return null;
    } /* getNode */

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
