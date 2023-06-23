
// console.log(a)
// let a=6
// add()
// function add(){
//     console.log('hello')
// }

// add()

// let sum = function(){
//     console.log('hello')
// }
// sum()




// let a=5
// function add(){
//     console.log(a)
// }
// add()
// console.log(a)


function outer(){
    // let nam1='gla'
    inner()
    let nam1 = 'gla'

    function inner(){
        console.log(nam1)
    }
}
outer()