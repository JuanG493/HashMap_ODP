
class Node {
    constructor(key = null, value = null, next = null) {
        this.key = key
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor(main) {
        this.head = null
    }
    // append(value) adds a new node containing value to the end of the list
    append(objElm) {
        function transversObj(obj) {
            while (obj.next instanceof Node) {
                obj = obj.next
            }
            let valObj = Object.values(objElm);
            let newTail = new Node(valObj[0])
            // the last Node before to null becomes the pointer to the new obj, 
            // this newNode becomes the tail, pointing to null;
            obj.next = newTail;
        }
        transversObj(this.head)
        return this.head
    }

    // prepend(value) adds a new node containing value to the start of the list
    prepend(objElm) {
        let keyObj = Object.keys(objElm)
        let valObj = Object.values(objElm);
        let newNode = new Node(keyObj[0], valObj[0], this.head);
        this.head = newNode;
        // this.end = newNode;
        return this.head
    }

    //  returns the total number of nodes in the list.
    size() {

        if (this.head instanceof Node) {
            let iter = this.head
            let totalItems = 1
            while (iter.next instanceof Node) {
                iter = iter.next
                totalItems += 1;
            }
            return totalItems;

        } else {
            return 0
        }
    }
    //  returns the first node in the list
    //  name top insted of head, head already point to the head of the constructor.
    top() {
        return this.head
    }
    //  returns the last node in the list
    tail() {
        let iter = this.head;
        while (iter.next instanceof Node) {
            iter = iter.next
        }
        return iter;
    }
    //  returns the node at the given index
    at(index) {
        let long = this.size();
        if (index > long || index < 0) {
            throw new Error('index out of range!');

        } else {
            let iterAtor = this.head
            let copyI = index;
            while (copyI > 0) {
                iterAtor = iterAtor.next
                copyI--;
            }
            return iterAtor
        }
    }
    //  removes the last element from the list
    pop() {
        let iter = this.head
        //check if the firstOne is the last One
        if (!(this.head.next instanceof Node)) {
            this.head = null
            console.log(this.size());
        } else {
            //  look ahead for the 1 value before the last to change it´s pointer.
            while (iter.next.next instanceof Node) {
                iter = iter.next
            }
            iter.next = null
        }
    }
    // returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let iter = this.head;
        while (iter instanceof Node) {
            if (iter.value == value) {
                // console.log(indexOF);
                return true
            } else {
                iter = iter.next

            }
        }
        return false;
    }
    containsKey(key) {
        let iter = this.head;
        while (iter instanceof Node) {
            if (iter.key == key) {
                // console.log(indexOF);
                return true
            } else {
                iter = iter.next

            }
        }
        return false;

    }
    //  returns the index of the node containing value, or null if not found.
    find(value) {
        let iter = this.head;
        let indexOF = -1
        while (iter instanceof Node) {
            if (iter.value == value) {
                indexOF += 1
                return indexOF
            } else {
                indexOF += 1
                iter = iter.next
            }
        }
        throw new Error('NO SUCH VALUE');

    }
    findKey(key) {
        let iter = this.head;
        let indexOF = 0;
        while (iter instanceof Node) {
            if (iter.key == key) {
                // indexOF += 1
                iter = null;
                // return indexOF
            } else {
                indexOF += 1
                iter = iter.next
            }
        }
        // return indexOF > -1 ? true : false;
        return indexOF;
    }
    //  represent the index of the node as strings
    toString() {
        let str = ""
        let iter = this.head;
        while (iter instanceof Node) {
            str += `(${iter.value}) -> `
            iter = iter.next;
        }
        return str + 'null'
    }
    // inserts a new node with the provided value at the given index.
    insertAt(value, index) {
        if (index == 0) {
            this.prepend({ val: value })
        } else {
            let iter = this.head;
            let bucleCount = index - 1;
            while (bucleCount != 0) {
                iter = iter.next
                bucleCount -= 1
            }
            let freshNode = new Node(value, iter.next);
            iter.next = freshNode;
        }
        return this.head
    }
    //   removes the node at the given index.
    removeAt(index) {
        if (index > (this.size() - 1)) {
            throw new Error('Out of range');
        } else {
            //  change the pointer for those > index 0; becouse I need to determine the node before
            if (index > 0) {
                let beforeNode, afterNode;
                let count = 0
                let iter = this.head;

                while (iter instanceof Node) {
                    //  node before of the index
                    if (count == index - 1) {
                        beforeNode = iter;
                    }
                    if (count == index + 1) {
                        afterNode = iter
                        break
                    }
                    else {
                        iter = iter.next
                        count += 1;
                    }
                }
                beforeNode.next = afterNode
                return this.head

            } else if (index == 0) {
                return this.head = this.head.next
            }
        }
    }
}


export { LinkedList }