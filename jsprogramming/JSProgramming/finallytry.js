try{
console.log("success");
throw new Error("err");
}catch(err){
    console.log(err);
}finally{
    console.log("runn");
}