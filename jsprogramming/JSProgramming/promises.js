let promises = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(() => {
        resolve("promise is resolved now");
    },3000);
});

let promises2 = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(() => {
        reject(new Error("Error in promise"));
    },3000);
});

// console.log("click 1");
// setTimeout(()=> {
//     console.log("click2");
// },1000);
// console.log("click 3");

// console.log(promises,promises2);

// setTimeout(()=> {
//     console.log(promises);
//     console.log(promises2);
    
// },1000);

promises.then((value) => {
    alert(value);
})
// error handling

promises2.then(()=> {

},(err) => {
    console.log(err)
})

// promises2
// .catch((err) => {
//     console.log(err);
// })