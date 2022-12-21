let loadScript = (srcs,callbacks,callback2) => {
    let script = document.createElement("script");
    script.src = srcs;
    document.body.appendChild(script);
    
    script.onload = () => {
        callbacks(null,srcs)
    }
    script.onerror = () => {
        callback2(new Error("error loading src"))
    }
}

let successload = (err,srcs) => {
    if(err){
        console.log(err);
        return
    }
    console.log('script loaded '+ srcs);
}

let errors = (err) => {
    console.log(err);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',successload,errors);

