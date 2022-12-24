let getWeathersRes = async () => {

    let khiWeather = new Promise((resolve,reject) => {
       setTimeout(() => resolve("10 Degree"),2000);
    });
    let mansehraWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("-1 Degree");
        }, 5000);
    });
    try{
        console.log(e);
    }catch(err){
        console.log(err);
    }
    
    console.log("fetching Karachi Weather");    
    let khiWeatherRes = await khiWeather;
    console.log(`fetched Karachi Weather ${khiWeatherRes}`);
    console.log("fetching Mansehra Weather");
    let mansehraWeatherRes = await mansehraWeather; 
    console.log(`fetched Mansehra Weather ${khiWeatherRes}`);
    return [khiWeatherRes,mansehraWeatherRes];
}
try {
    let getWeathers = getWeathersRes(); 
    getWeathers.then(v => console.log(v));
    console.log(fetched);    
} catch (error) {
    console.log(error)
}
