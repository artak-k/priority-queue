const HashMap = require("./HashMap.js");
const Node = require("./Node.js");
const { swap } = require("./utils.js");

class PriorityQueue {
    constructor() {
        this.heap = [];
        this.hashMap = new HashMap()
    }

    // Helper methods for parent and child indices
    getParentIndex(i) {
        return parseInt((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // Swap elements in the heap and update the hash map
    swap(i, j) {
        swap(this.heap, i, j);

        this.hashMap.setVal(this.heap[i].element, i);
        this.hashMap.setVal(this.heap[j].element, j);
    }

    // Insert an element with a given priority
    insert(element, priority) {
        const node = new Node(element, priority);
        this.heap.push(node);
        const index = this.heap.length - 1;
        this.hashMap.setVal(element, index);
        this.bubbleUp(index);
    }

    // Remove and return the element with the highest priority
    removeMax() {
        if (this.isEmpty()) return null;

        this.swap(0, this.heap.length - 1);
        const maxNode = this.heap.pop();
        this.hashMap.delete(maxNode.element);
        this.sinkDown(0);

        return maxNode.element;
    }

    // Update the priority of an existing element
    updatePriority(element, newPriority) {
        const index = this.hashMap.getVal(element);
        if (index === undefined) return;

        const oldPriority = this.heap[index].priority;
        this.heap[index].priority = newPriority;

        if (newPriority > oldPriority) {
            this.bubbleUp(index);
        } else {
            this.sinkDown(index);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    // Bubble up the element at index to maintain heap property
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[index].priority <= this.heap[parentIndex].priority) break;

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // Sink down the element at index to maintain heap property
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            let leftChild, rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority > element.priority) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild.priority > element.priority) ||
                    (swapIndex !== null && rightChild.priority > leftChild.priority)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;

            this.swap(index, swapIndex);
            index = swapIndex;
        }
    }
}

module.exports = PriorityQueue