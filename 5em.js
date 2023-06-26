// function a(fn){
//     console.log('a')
//     fn()
// }
// function b(){
//     console.log('b')
//     a()
// }
// a(b)


// function a(){
//     console.log('a')
//     function b(){
//         console.log('b')
//     }
//     return b
// }
// let b=a()
// b()




// function a(){
//     console.log('a')
//     function b(){
//         console.log('b')
//     }
//     return b
// }
// a()()





function separatedata(arr){
    let result = {stringValues: [], numberValues: [], booleanValues: []};
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let type = typeof value;

    switch (type) {
        case 'string':
            result.stringValues.push(value);
            break;
        case 'number':
            result.numberValues.push(value);
            break;  
        default:
            result.booleanValues.push(value);
            break;
    }
}
    return result;
}
let arr=[1,2,3,4,'hello','gla',true,false]
let res = separatedata(arr);
console.log(res)