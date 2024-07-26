// setTimeout(function execute(){
//     console.log("task completed")
// },3000)


let id1= setTimeout(function execute1(){
    console.log("task 1 completed")
},7000)


let id2= setTimeout(function execute2(){
    console.log("task 2 completed")
    clearTimeout(id1)
},5000)