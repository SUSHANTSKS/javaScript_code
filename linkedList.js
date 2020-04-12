class Node {
    constructor(data, nextNode = null) {

        this.data = data;
        this.nextNode = nextNode;
        console.log("first node :" + data);
        console.log("nextNode :" + nextNode);
    }

}
class Linkedlist {
    constructor() {
            this.head = null;
            this.size = 0
        }
        // insert first node
    insertFirst(data) {
            this.head = new Node(data, this.head)
            this.size++;
        }
        // insert last data
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty, make a head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.nextNode) {
                current = current.nextNode
            }
            current.nextNode = node;

        }
        this.size++;
        console.log("current data" + JSON.stringify(current));
    }

    // insert at index 
    insertAt(data, index) {
        //case 1
        // insert index out of range
        if (index > 0 && index > this.size) {
            return;
        }
        //case 2
        // if first index position
        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
        }
        // case 3
        // checking the another index next
        const node = new Node(data);
        let current, previous;
        //set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // node before index
            count++;
            current = current.nextNode; // node after index

        }
        node.nextNode = current;
        previous.nextNode = node;
        this.size++

    }

    // get at index at certain value

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log("get index at position: " + current.data);
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }

    // remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // remove First position
        if (index === 0) {
            this.head = current.nextNode;


        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.nextNode
            }
            previous.nextNode = current.nextNode
        }
        this.size--;
    }



    printListData() {
        let current = this.head;
        while (current) {
            console.log("print data" + current.data)
            current = current.nextNode;
        }
    }

}

let ll = new Linkedlist();
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
ll.insertLast(100);
ll.insertLast(200);
ll.insertLast(300);

// insert at
ll.insertAt(1000, 1)


// ll.getAt(2);

// ll.removeAt(2);

ll.printListData();