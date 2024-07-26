function process(){
    console.log("start")
setTimeout(function exec(){
    console.log("executed some task")
},7000)
for(let i=0;i<10000000000;i++){
    // something
}
console.log("end")
}

process()
console.log("TATA")