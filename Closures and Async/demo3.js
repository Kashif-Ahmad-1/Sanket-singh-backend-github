function a(name){
    return function b(){
        console.log(name)
    }
}

let x = a('kashif')
console.log(x)
x()