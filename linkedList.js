class LinkedList {
    constructor() {
        this.ticks = 0
        this.head = null;
    }

    insertFirst(item) {
        this.ticks += 1
        this.head = new _Node(item, this.head)
    }
    
    insertBefore(item, insertBeforeValue) {
        this.ticks += 1
        // is list empty
        if (!this.head) {
            return null
        }
        // is currNode the head of linkedList?
        if (insertBeforeValue === this.head.value) {
            prevNode.next = new _Node(item, currNode)
        }
        // define prev curr node
        let prevNode = this.head
        let currNode = this.head

        while (currNode !== null && currNode.value !== insertBeforeValue) {
            this.ticks += 1
            // move to next node
            prevNode = currNode
            currNode = currNode.next
            // currentNode is null (end of list)
            if (currNode === null) {
                console.log('can\'t insert before item that does\'t exist')
                return
            }
        }
        // found node to insert infront of
        // linking new node to prevNode.next
        // and pointing new Node.next to currNode
        prevNode.next = new _Node(item, currNode)
        return
    }

    insertAfter(item, insertAfterValue) {
        this.ticks += 1
        // is list empty
        if (!this.head) { return }
        // define current node
        let currNode = this.head
        // is insertAfterValue first in list
        if (currNode.value === insertAfterValue) {
            currNode.next = new _Node(item, currNode.next)
        }
        // loop while currNode.next not equal to insertAfterValue
        while (currNode !== null && currNode.value !== insertAfterValue) {
            this.ticks += 1
            // move to next node
            currNode = currNode.next
            // currNode not in list
            if (currNode === null) { 
                console.log('can\'t insert after item that does\'t exist')
                return
            }
        }
        // found, currNode.next = new _Node(item, currNode.next)
        currNode.next = new _Node(item, currNode.next)
        return
    }

    insertAt(item, position) {
        // is list empty
        if (!this.head) { return }
        // is position === 1, insert first
        if (position === 1) {
            this.head = new _Node(item, this.head)
        }
        // define count, currNode and prevNode
        let count = 1
        let prevNode = this.head
        let currNode = this.head
        // while currNode !== null && count is !== position
        while(currNode !== null && count !== position) {
            // increment count
            count += 1
            // go to next node
            prevNode = currNode
            currNode = currNode.next
            // position not found
            if (currNode === null) { 
                console.log('list does not contain the position requested')
                return
            }
        }
        // found, insert before, prevNode.next = item, and item.next = currNode
        prevNode.next = new _Node(item, currNode)
    }

    insertLast(item) {
        if (this.head === null) {
            this.ticks += 1
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while ( tempNode.next !== null) {
                this.ticks += 1
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head
        if (!this.head) {
            this.ticks += 1
            return {
                status: null, 
                ticks: this.ticks
            }
        }
        else {
            while (currNode.value !== item) {
                this.ticks += 1
                if (currNode.next === null ) {
                    return currNode
                }
                else {
                    currNode = currNode.next
                }
            }
            return currNode
        }
    }

    sort() {
        // empty list
        if (!this.head) { return }
        // only one value. list already sorted
        if (!this.head.next) { return this.head }
        for (let i = this.head; i.next !== null; i = i.next) {
            for (let j = i.next; j !== null; j = j.next) {
                // swap node values if i > j
                if (i.value > j.value) {
                    let temp = i.value
                    i.value = j.value
                    j.value = temp
                }
            }
        }
        return this.head
    }

    findMiddle() {
        let slow = this.head
        let fast = this.head
        while (fast && fast.next) {
            // move q twice as fast as p
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    lastNode() {
        let currNode = this.head
        while (currNode.next !== null) {
            currNode = currNode.next
        }
        return currNode
    }

    trim(end, trimmed = new LinkedList) {
        for (let i = this.head; i !== null && i !== end; i = i.next) {
            trimmed.insertLast(i.value)
        }
        return trimmed
    }

    remove(item) {
        this.ticks += 1
        // is list empty
        if (!this.head) {
            return null
        }
        // item in head (first in list)
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // define prev curr node
        let prevNode = this.head
        let currNode = this.head
        // while next node isn't null and currentNode value on item
        while (currNode.next !== null && currNode.value !== item) {
            this.ticks += 1
            // move to next node
            prevNode = currNode
            currNode = currNode.next
            // currentNode is null (end of list)
            if (currNode === null) {
                console.log('Item not found')
                return
            }
        }
        // found value, set prev node.next to curr node.next
        prevNode.next = currNode.next
    }
    createLoop(item) {
        let tempNode = this.head
        while ( tempNode.next !== null) {
            this.ticks += 1
            tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, this.head.next.next)
        this.head.next.next = tempNode.next
    }
}

class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    } 
}

module.exports = LinkedList;