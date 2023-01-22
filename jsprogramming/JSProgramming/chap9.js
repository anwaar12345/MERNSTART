// promise way
let loadScript = (srcs) => {
   return new Promise((resolve,reject) => {
        let scr =document.createElement("script");
        scr.src = srcs;
        document.body.append(scr);
        scr.onload = () =>  resolve("loaded");
        scr.onerror = () => reject("failed to load");
    });
}   

let loadScr = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");

loadScr.then((value) => {
    alert(value);
})
.catch((err) => {
    console.log(err);
})
 //async await way
let loadscr = (srcs) => {
    let scr =document.createElement("script");
    scr.src = srcs;
    document.body.append(scr);
    scr.onload = () => alert("loaded second script");
    scr.onerror = () => "loading issues";
    return srcs;
}
 let loadScripttoBottom = async (srcs,loadscr) => {
    let load = await loadscr(srcs);
    return load;
 }

let loading = loadScripttoBottom("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",loadscr);
loading.then(v => console.log(v))
.catch(err => console.log(err));


let loadScrRej = () => {
    let loader = new Promise((resolve,reject) => {

        setTimeout(() => {
                reject("rejected");
        },3000)


    });
    return loader;
    
}
let loader = async () => {
    try {
      await loadScrRej();   
    } catch (error) {
        alert(error);
    }
}  
loader();

try {
    let p1 = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => { resolve("resolved 1")},3000);
        })
    }
    
    let p2 = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => { resolve("resolved 2")},3000);
        })
    }
    let p3 = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => { resolve("resolved 3")},3000);
        })
    }
    

    let getAllPs = async () => {
        console.time("run");
        let ps1 = p1();
        let ps2 = p3();
        let ps3 = p3();
        let allPs = await Promise.all([ps1,ps2,ps3]);
        console.log(allPs);
        console.timeEnd("run");
    }
     getAllPs();

} catch (error) {
    console.log(error);
}






