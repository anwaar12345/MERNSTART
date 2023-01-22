let btn = document.getElementById('search');
var options = {
     method : "GET",
     Headers : {
        "content-type" : "application/json"
    }
};
let fetchWeatherData = (city) => {
        return  fetch(`https://cors-anywhere.herokuapp.com/https://goweather.herokuapp.com/weather/${city}`)
        .then((responce)=>{
            if(responce.ok && responce.status == 200)
                return responce.json();
            
        })
        .then(json => json);
}

btn.addEventListener('click',async () => {
   try {
    let city = document.getElementById('city').value;
    let weatherData = await fetchWeatherData(city);

    for (const key in weatherData) {
        console.log(key,weatherData[key])
        let heading = document.createElement("h3");
        if(!Array.isArray(weatherData[key])){
            heading.innerHTML = `<strong>${key} : </strong> <em>${weatherData[key]}</em>`;
            document.body.append(heading);     
        }else{
            heading.innerHTML = `<strong>${key} : </strong>`;
            document.body.append(heading); 
            let ul = document.createElement('ul');
            weatherData[key].forEach(element => {
                for (const key in element) {
                    let li = document.createElement('li'); 
                    li.innerHTML= `${key} : ${element[key]}`;
                    ul.append(li);
                }
       
            });
            document.body.append(ul);
        }

    }    
   } catch (error) {
        console.log(error);
   }

});