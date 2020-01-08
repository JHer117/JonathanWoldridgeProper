// Add Front
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
    displayValues(){
        var current = this.head;
        while(current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}
var listNode = new SinglyLinkedList();
listNode.addToFront("Created first Node.");
listNode.addToFront("Created cutter Node.");
console.log(listNode);

// Remove Front
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
    displayValues(){
        var current = this.head;
        while(current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}
var listNode = new SinglyLinkedList();
listNode.addToFront("Created first Node.");
listNode.addToFront("Created cutter Node.");
console.log(listNode);