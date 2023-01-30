// let startHacking = async (text) => {
//     let hacker =  new Promise((resolve,reject) => {
//         setTimeout(_ => resolve(`${text}`),2000);
//     });
//     return await hacker;
// }  


// startHacking('Started Hacking')
// .then(value => {
//     console.log(value)
//    return startHacking('Hacking.....')
// })
// .then(value => {
//     console.log(value)
//     return startHacking('Getting Data....')
//  })
//  .then(value => {
//     console.log(value);
//     return startHacking('Account Hacked')
//  })
//  .then(value => {
//     console.log(value);
//  })
//  .finally((value)=>{
//     console.log('finished hacking');
//  });

const messages= [
   'Started Hacking',
   'Hacking.....',
   'Getting Data....',
   'Account Access cracking',
   'Credentials Decrypting',
   'Trying Login',
   'Account Accessed',
   'Account Hacked'
]

let startHacking = async (text) => {
    let hacker =  new Promise((resolve,reject) => {
        setTimeout(_ => resolve(`${text}`),2000);
    });
    await hacker
    return text;
}  

(async () => {
   for(let i=0; i < messages.length; i++){
      let message = await startHacking(messages[i]);
      console.log(message);      
   }
})();
