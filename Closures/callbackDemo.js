function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i)
    }

    fn()
}

fun(10, function log(){
    // this is the callback function
    console.log("custom logger")
})