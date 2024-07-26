function todo(task){
    console.log("start of todo")
    setTimeout(function fun(){
        console.log("completed", task);
    },2000)
    task ='dynanda'
    console.log("end of todo")
}

console.log('starting')
todo("assigments")
console.log("finish")