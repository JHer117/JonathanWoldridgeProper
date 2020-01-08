// Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If the list is empty, return null.
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addToFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
    displayAsArray() {
        let currentNode = this.head;
        let output = "[";
        while(currentNode !== null) {
            output += currentNode.value;
            if(currentNode.next !== null) {
                output += ","
            }
            currentNode = currentNode.next;
        }
        output += "]";
        console.log(output);
    }
    displayValues() {
        let currentNode = this.head;
        while(currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    removeLast() {
        if(!this.head) {
            throw Error("Cant remove from an empty list!");
        }
        else if(!this.head.next) {
            let returnVal = this.head.value;
            this.head = null;
            return returnVal;
        }
        let current = this.head;
        while(current.next.next !== null) {
            current = current.next;
        }
        let returnVal = current.next.value;
        current.next = null;
        return returnVal;
    }
    removeFirst() {
        if(!this.head) {
            throw Error("Cant remove from an empty list!");
        }
        let returnVal = this.head.value;
        this.head = this.head.next;
        return returnVal;
    }
    removeAt(position) {
        let count = 1;
        let current = this.head;
        while(count < position && current.next !== null) {
            count++;
            current = current.next;
        }
        let returnVal = current.next.value;
        current.next = current.next.next;
        return returnVal;
    }
}
let myList = new SLL();
myList.addToFront(3);
myList.addToFront(2);
myList.addToFront(1);