function outer(){
    let user = 'gla'
    function inner(){
        console.log(user)
    }
    return inner
}

outer()
let inner = outer()
inner()