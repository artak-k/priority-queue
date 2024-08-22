const PriorityQueue = require("./PriorityQueue.js");

// if typescript is required can rewrite it
( (pq) => {
    pq.insert('task1', 5);
    pq.insert('task2', 3);
    pq.insert('task3', 8);
    pq.insert('task4', 2);

    console.assert(pq.removeMax() === 'task3', 'Test Case 1 Failed');
    console.assert(pq.removeMax() === 'task1', 'Test Case 2 Failed');

    pq.insert('task5', 6);
    pq.updatePriority('task2', 9);

    console.assert(pq.removeMax() === 'task2', 'Test Case 3 Failed');
    console.assert(pq.removeMax() === 'task5', 'Test Case 4 Failed');
    console.assert(pq.removeMax() === 'task4', 'Test Case 5 Failed');
    console.log('All Test Cases Passed!');
})(new PriorityQueue());