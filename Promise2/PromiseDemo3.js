function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("going to start the download")
        setTimeout(function process(){
            let data = "Dummy downloaded data";
            console.log("download completed")
            resolve(data)
        },10000)
        console.log("timer to mimic download started")
    })
}

console.log("starting the program")
console.log("we are expecting to mimic a downloader");
x = fetchData("www.google.com")
console.log("new promise object succesfully, but dopopwnloading still going")