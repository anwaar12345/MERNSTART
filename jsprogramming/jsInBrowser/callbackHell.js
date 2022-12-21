// function loadScript(srcs,callback){
//    let scrpt = document.createElement("script");
//     scrpt.src = srcs;
//     document.body.append(scrpt);
//     scrpt.onload = callback();
//     loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',() => {
//         loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',() => {
//             loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',() => {
//                 loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',() => {
//                     loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',() => {
        
//                      })
//                 })
//             })
//         })    
//     });
    
// }

// let hello = () => {
//     console.log('hello')
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',hello)

let process = (num,callback) => {
    callback(num);
    return "Money: "+num+" Account has "+account;
    
};

var account = [];
function saveToAccount(num){
    return account.push(num);
}

function add(a,b,process){
   return process(a+b,saveToAccount);
}


console.log(add(1,2,process));

