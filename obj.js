let obj={
    java : 50,
    full : 80,
    sum:function(){
        console.log(this.java+this.full)
    }
}

obj.sum()