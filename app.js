fetch("https://api.weatherapi.com/v1/current.json?key=5dff67b3551c44e4a0e24607241309&q=panadura&aqi=no")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    let temp_c = document.getElementById("temp");
    temp_c.innerText = data.current.temp_c;
    console.log(data.current.temp_c);

    console.log(data);
    let condition = document.getElementById("description");
    condition.innerText = data.current.condition.text;
    console.log(data.current.condition.text);

    console.log(data);
    let name = document.getElementById("city");
    name.innerText = data.location.name;
    console.log(data.location.name);

    console.log(data);
    let localtime = document.getElementById("date");
    localtime.innerText = data.location.localtime;
    console.log(data.location.localtime);

    console.log(data);
    let humidity = document.getElementById("humidity");
    humidity.innerText = data.current.humidity;
    console.log(data.current.humidity);

    console.log(data);
    let wind_kph = document.getElementById("wind-speed");
    wind_kph.innerText = data.current.wind_kph;
    console.log(data.current.wind_kph);

    console.log(data);
    let feelslike_c = document.getElementById("feels-like");
    feelslike_c.innerText = data.current.feelslike_c;
    console.log(data.current.feelslike_c);

    

});

function citySearch(){
    let locationInput = document.getElementById("locationInput").value;

    city = document.getElementById("city");
    date = document.getElementById("date");
    temp = document.getElementById("temp");
    condition = document.getElementById("description");
    humidity = document.getElementById("humidity");
    wind_kph = document.getElementById("wind-speed");
    feelslike_c = document.getElementById("feels-like");

    console.log(locationInput);
    fetch(`https://api.weatherapi.com/v1/current.json?key=5dff67b3551c44e4a0e24607241309&q=${locationInput}&aqi=no`)
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
        city.innerText = data.location.name;
        date.innerHTML = data.location.localtime;
        temp.innerHTML = data.current.temp_c;
        condition.innerHTML = data.current.condition.text;
        humidity.innerHTML = data.current.humidity;
        wind_kph.innerHTML = data.current.wind_kph;
        feelslike_c.innerHTML = data.current.feelslike_c;
    });
}

