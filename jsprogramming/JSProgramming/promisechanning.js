let loadScript = (scrs) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let scr = document.createElement("script");
            scr.src = scrs;
            document.body.appendChild(scr);
            scr.onload = () => {
                resolve('Script Added');
            }
            scr.onerror = () => {
                reject("loading failed")
            }
        },1000);
    });
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js').then((value) => {
    console.log(value);
    return loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js');
})
.then(value => {
    console.log('loaded');
})
.catch(value => {
    console.log(value);
});