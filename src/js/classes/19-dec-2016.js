/**
 * Created by Sabbu on 19/12/16.
 */

// import {reduce} from './15-dec-2016';

// const reduce = require('./15-dec-2016');

let mapper = (arr, fn) => {

    let output = [];

    for(var i=0;i<arr.length;i++) {
        let elem = arr[i];
        let o = fn(elem);
        output.push(o); // adding an element to the array at its end
    }
    return output;
};

let reduce = (arr, fn, initial) => {
    for(var i=0;i<arr.length;i++) {
        let elem = arr[i];
        initial = fn(initial, elem);
    }
    return initial;
};

let range = (n) => {
    let r = [];
    for(var i=1;i<=n;i++) {
        r.push(i);
    }
    return r;
};

let print = (m) => console.log(m);

// print(range(50));

let array = range(35);

let sigma = (n) => {
    let arr = range(n);
    return reduce(arr, (acc, elem) => acc + elem, 0);
};

print("sigma->"+sigma(10));

let pi =(n) => {
    let arr = range(n);
    return reduce(arr, (acc, elem) => acc * elem, 1);
};

print("pi->"+pi(5));

let sigmas=(n) => {

    let arr = range(n);
    return reduce (arr,(acc,elem) =>  (elem * elem) + acc, 0);
};

print ("sigmasquare->"+ sigmas(4));


let factorial = (n) => n > 0 ? n * factorial(n-1) : 1;

print('fact->' + factorial(4));

/**
 *
 * tail recursion
 *
 */

let factorial2 = (n) => {
    let fact = (acc, no) => {
        return no > 1 ? fact(acc * no, no-1) : acc;
    };
    return fact(1, n);
};

/*

    fact(1,4) -> fact(4, 3) -> fact(12, 2) -> fact(24, 1) -> 24

 */

print('fact->' + factorial2(4));

/**
 *  n! = n * (n-1) * (n-2) * (n-3) * (n-4) * ....... * 3 * 2 * 1
 *  n! = n * (n-1)!
 */

