function fun(){
    console.log('fun called')
}

function gun(fn){
    console.log("inside gun")
    fn()
    console.log("leaving gun")
    // console.trace()
}

// gun(function (){
//     console.log("new function paased")
// })

gun(fun)



// study about arguments.callee