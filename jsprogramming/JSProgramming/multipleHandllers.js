let p = new Promise((resolve,reject)=>{
    setTimeout(() => resolve('resolved'),1000);

});

p.then(v => console.log(v));

p.then(v => alert(v));
p.then(v => setTimeout(()=> {
    console.log(v);
},1000) )


