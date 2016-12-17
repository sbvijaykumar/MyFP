/**
 * Created by Sabbu on 17/12/16.
 */

/*

 1) write a function with arguments as array and an input function. The input function should accept one argument and gives a boolean result. The output should be an array with elements passed by passing this to input function.

 let filter = (arr, fn) => {};

 let fn = (elem) => returns true/false;

 Eg:

 Input: ([1,2,3,4], (x) => x%2 === 0)
 Output: [2, 4]

 Input: ([1,2,3,4], (x) => x > 0)
 Output: [1,2,3,4]

 Input: ([1,2,3,4], (x) => x < 0)
 Output: []

 outputSize <= inputSize

 */

/**
 *
 * for(;;) {
 *
 * }
 *
 *
 * for(var i=0;i<n;i++) {
 *  block
 * }
 *
 * var i=0;
 * while(i<n) {
 *  block
 *  i++;
 * }
 *
 * 1) var i = 0; -> Initialization
 * 2) i < n -> Condition
 * 3) Block
 * 4) i++ -> incrementation/decrementation
 * 5) Condition
 * 6) if condition is true then block
 *
 *
 *
 */

// Imperative

import {mapper, reduce} from './15-dec-2016';

let filter = (arr, fn) => {

    let acc = [];

    for(var i=0;i<arr.length;i++) {

        let current = arr[i];

        let r = fn(current);

        if(r) {
            acc.push(current);
        }
    }

    return acc;
};


let modernFilter = (arr, fn) => {
    return reduce(arr, (acc, current) => {
        let r = fn(current);
        if(r) {
            acc.push(current);
        }
        return acc;
    }, []);
};

let mapperUsingReduce = (arr, fn) => {
    return reduce(arr, (acc, current) => {
        let r = fn(current);
        acc.push(r);
        return acc;
    }, []);
};

