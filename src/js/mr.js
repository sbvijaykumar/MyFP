/**
 * Created by Sabbu on 13/12/16.
 */

let mapper = (arr, fn) => {
    let result = [];
    for(var i=0;i<arr.length;i++) {
        let elem = arr[i];
        let r = fn(elem);
        result.push(r);
    }
    return result;
};

let a = [1,2,3,7];

let square = (x) => x * x;

let r = mapper(a, square);

let calculate = () => {
    let inputElem = document.getElementById('arr_input');
    let val = inputElem.value;
    let tokens = val.split(',');
    let arr = [];
    for(var i=0;i<tokens.length;i++) {
        let t = tokens[i];
        arr.push(t);
    }
    let r = mapper(arr, square);

    let domElem = document.getElementById('result_container');
    domElem.innerHTML = r;
};

// let domElem = document.getElementById('result_container');
//
// domElem.innerHTML = r;

