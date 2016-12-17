/**
 * Created by Sabbu on 15/12/16.
 */

/*

 1) create a function which accepts an array of integers, and a function. The result of the function should apply input function to all the values of the input array and frame the output as another array.

 */

/*

 Array: 0 -> n-1

 a[0]
 a[1]
 a[2]
 .
 .
 a[9]

 */


let mapper = (arr, fn) => {

    let output = [];

    for(var i=0;i<arr.length;i++) {
        let elem = arr[i];
        let o = fn(elem);
        output.push(o); // adding an element to the array at its end
    }
    return output;
};

let double = (x) => x * 2;

let square = (x) => x * x;

let cube = (x) => x * x * x;

let a = [1,2,3,4,5];

let appendOutput = (containerId, content) => {
    // if(!window.document) return;
    // let obj = document.getElementById(containerId);
    // obj.innerHTML = obj.innerHTML + content;
};

appendOutput('output_container', a);
// document.getElementById('output_container').innerHTML = document.getElementById('output_container').innerHTML + a + '<br/>';

console.log(a);

let output = mapper(a, double);

appendOutput('output_container', '<br/>');
appendOutput('output_container', output);

// document.getElementById('output_container').innerHTML = document.getElementById('output_container').innerHTML + output + '<br/>';

console.log(output);

output = mapper(a, square);

appendOutput('output_container', '<br/>');

appendOutput('output_container', output);

// document.getElementById('output_container').innerHTML = document.getElementById('output_container').innerHTML + output + '<br/>';

console.log(output);

output = mapper(a, cube);

appendOutput('output_container', '<br/>');

appendOutput('output_container', output);

// document.getElementById('output_container').innerHTML = document.getElementById('output_container').innerHTML + output + '<br/>';

console.log(output);


/*

2) create a function which accepts an array of integers, a function and an initial value. The result should is the function should be applied to all the entries of the input array with the given initial value passed to the input function. So the final result should be the type of initial value.

*/

let reduce = (arr, fn, initial) => {
    for(var i=0;i<arr.length;i++) {
        let elem = arr[i];
        initial = fn(initial, elem);
    }
    return initial;
};

/***
 *          iteration   initial  elem  => fn(initial, elem) => sum(initial, elem)
 *          --------------------------------------------------------------------
 *          0           0       a[0] = 1            sum(0, 1)
 *          1           1       a[1] = 2            sum(1, 2)
 *          2           3       a[2] = 3            sum(3, 3)
 *          3           6       a[3] = 4            sum(6, 4)
 *          4           10      a[4] = 5            sum(10, 5) => 15
 *
 */


let sum = (a, b) => a + b;

output = reduce(a, sum, 0);

console.log(output);










