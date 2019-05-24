'use strict';

//Complete this algo
const isLoop = (linkedlist) => {

    // ORIGINAL SOLUTION (assumes all node values are unique):

    // const dictionary = {};
    // let currentNode = linkedlist.head;
    // while (currentNode.next) {
    //     if (dictionary[currentNode.value]) {
    //         return true;
    //     }
    //     dictionary[currentNode.value] = true;
    //     currentNode = currentNode.next;
    // }
    // return false;

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop