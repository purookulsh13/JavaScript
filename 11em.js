let ele = document.querySelector('div')
// let h1 = document.createElement('h1')
// h1.innerText='hello'
// ele.appendChild(h1)
// console.log(ele)

let inputEle = document.querySelector('input')
let h1 = document.querySelector('h1');
inputEle.addEventListener('input', function(event){  //takes two arguments 1.eventName 2.CallBack function
    h1.innerText = event.target.value
    // console.log(event.target.value)
})