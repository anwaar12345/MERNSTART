let p1 = new Promise((resolve, reject) => {
    setTimeout( _ => reject("resolved 1"),1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout( _ => reject("rejected 2"),2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout( _ => reject("resolved 3"),3000);
});


let allPromises = Promise.all([p1,p2,p3]);
console.log(allPromises); //will print all resolved but fail on error

let allSettled = Promise.allSettled([p1,p2,p3]); //will print resolved and rejected but no error
console.log(allSettled);

let imediateResolved = Promise.race([p1,p2,p3]); //will return imediate resolved if error it will return error 
console.log(imediateResolved);

let anyImediateResolved = Promise.any([p1,p2,p3]); //will return imediate resolved if all error it will aggregate return error
console.log(anyImediateResolved);


let resolved = Promise.resolve("resolved by resolve"); //will return a new resolved promise
console.log(resolved) 

let rejected = Promise.reject("Rejected by reject"); //will return a new rejected promise with provided reason
console.log(rejected) 