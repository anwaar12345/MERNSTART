try{

    // throw new Error("error");
    // throw new ReferenceError("error");
    throw new SyntaxError("error");
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack)
}