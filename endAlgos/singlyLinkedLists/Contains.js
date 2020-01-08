// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.
class ListNode {
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
        var newNode= new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    displayVal(){
        var current = this.head.value;
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
listNode.displayVal();