
        var cityWeather = document.getElementById("city");
        var cityTemp = document.getElementById("temp-degree");
        var tempIcon = document.getElementById("icon");
        var cityCloud = document.getElementById("cloud");
        var cityWind = document.getElementById("humidity");
        var cityHumidity = document.getElementById("wind-speed");

        var apiId ="284fdcb160c08b1eae4c413930eacb73";
       


    const checkWeather = ( ) =>{

        setHeader = {
            headers:{
                Accept: "application/json"
            }
        }

     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("searches").value}&appid=284fdcb160c08b1eae4c413930eacb73`, setHeader)
        .then( (res)=> res.json() )
        .then( (data)=>{
            console.log(data);
            cityWeather.innerHTML=`Weather in ${data.name}`
            cityTemp.innerHTML= `Temp:  ${(data.main.temp-273).toFixed(2)}` 
           // cityIcon.src= `https:openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`                        
            cityCloud.innerHTML= `description:  ${data.weather[0].description}`
            cityHumidity.innerHTML= `humidity:  ${data.main.humidity} %` 
            cityWind.innerHTML= `Wind Speed:  ${data.wind.speed} Km/h`  
        });

    }

       