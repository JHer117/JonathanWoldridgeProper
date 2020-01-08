class BSTNode{
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    size(node=this.root){
        if(node ===null){
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }

    contains(value, node = this.root) {
        if(node === null) {
            return false;
        }
        if(node.value === value) {
            return true;
        }
        if(value <node.value){
            return this.contains(value, node.left);

        }
            else{
                return this.contains(value, node.right);
                
        }
    }

    add(value, node=this.root) {
        
        if(this.root = null) {
            this.root = new BSTNode(value);
            return;
        }
        if (value >=node.value) {
            if (node.right !== null) {
                return this.add(value, node.right);
            }
            else {
                node.right = new BSTNode(value);
            }
        }
        else {
            if(node.left !==null) {
                return this.add(value, node.left);
            }
            else {
                node.left = new BSTNode(value);
            }
        }
    }
}
var tree = new BST();
tree.add(5);
tree.add(10);
tree.add(100);
tree.add(7);
tree.add(25);
console.log(tree);
console.log(tree.contains(7));