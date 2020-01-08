class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null;
    }
    addToFront(val){
        var newNode= new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    displayMax(){
        var max = this.value;
        var current = this.head;
        while(current !== null) {
            if(max<current.value){
                max = current.value
                current = current.next;
            }
        }
        return max;
    }
    displayMin(){
        var min = this.value;
        var current = this.head;
        while(current !== null) {
            if(min>current.value){
                min = current.value
                current = current.next;
            }
        }
        return min;
    }
    displayAvg(){
        var avg = 0;
        var current = this.head;
        while(current !== null) {
                avg += current.value;
                current = current.next;
            }
        
        return avg/Node.length;
    }
}
var listNode = new SinglyLinkedList();
listNode.addToFront(5);
listNode.addToFront(10);
listNode.addToFront(15);
listNode.displayMax();
listNode.displayMin();
listNode.displayAvg();
console.log(listNode);