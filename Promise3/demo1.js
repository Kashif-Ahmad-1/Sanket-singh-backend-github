console.log("start of the file")
setTimeout(function timer1(){
console.log("timer 1 done")
},0)

for(let i=0;i<10000000000;i++){
    // something
}

let x = Promise.resolve("kashif promise")
x.then(function processPromise(value){
    console.log("whose promise?", value)
})

setTimeout(function timer2(){
console.log("timer 2 done")
},0)
console.log("end of the file")