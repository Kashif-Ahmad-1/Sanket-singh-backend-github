function fetchData(url){
    return new Promise(function(resolve, reject){
        console.log("starting fetching from", url)
        setTimeout(function process(){
            let data = "dummy data"
            console.log("completed fetchinf the data")
            resolve(data)
        },4000)
    })
}

function fetch1(url){
    return new Promise((resolve, reject) => {
        for(let i=0;i<1000000;i++){

        }
        console.log("completed")
    })
}