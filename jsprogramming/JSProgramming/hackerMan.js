let startHacking = async (text) => {
    let hacker =  new Promise((resolve,reject) => {
        setTimeout(_ => resolve(`${text}`),2000);
    });
    return await hacker;
}  


startHacking('Started Hacking')
.then(value => {
    console.log(value)
   return startHacking('Hacking.....')
})
.then(value => {
    console.log(value)
    return startHacking('Getting Data....')
 })
 .then(value => {
    console.log(value);
    return startHacking('Account Hacked')
 })
 .then(value => {
    console.log(value);
 })
 .finally((value)=>{
    console.log('finished hacking');
 });