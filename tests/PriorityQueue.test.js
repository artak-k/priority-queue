const PriorityQueue = require("../src/PriorityQueue.js");

describe('PriorityQueue', () => {
    let pq;

    beforeEach(() => {
        pq = new PriorityQueue();
    });

    test('should return null when removing from an empty queue', () => {
        const result = pq.removeMax();

        expect(result).toBeNull();
    });

    test('should insert elements into the priority queue', () => {
        pq.insert('task1', 5);
        pq.insert('task2', 3);

        expect(pq.heap).toEqual([{ element: 'task1', priority: 5 }, { element: 'task2', priority: 3 }]);
        expect(pq.hashMap.getVal('task1')).toBe(0);
        expect(pq.hashMap.getVal('task2')).toBe(1);
    });

    test('should remove and return the element with the highest priority', () => {
        pq.insert('task1', 5);
        pq.insert('task2', 3);
        pq.insert('task3', 8);

        const maxElement = pq.removeMax();

        expect(maxElement).toBe('task3');
        expect(pq.heap).toEqual([{ element: 'task1', priority: 5 }, { element: 'task2', priority: 3 }]);
        expect(pq.hashMap.getVal('task1')).toBe(0);
        expect(pq.hashMap.getVal('task2')).toBe(1);
    });

    test('should update the priority of an existing element', () => {
        pq.insert('task1', 5);
        pq.insert('task2', 3);
    
        pq.updatePriority('task2', 7);
    
        expect(pq.heap).toEqual([{ element: 'task2', priority: 7 }, { element: 'task1', priority: 5 }]);
        expect(pq.hashMap.getVal('task1')).toBe(1); // task1 should now be at index 1
        expect(pq.hashMap.getVal('task2')).toBe(0); // task2 should be at the root
    });
})