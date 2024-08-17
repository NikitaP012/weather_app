const weatherApp = async () => {
    let city = await document.getElementById("name").value;
    console.log(city);
    let respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e70d151f855727a5f34cb2b34099920`)
    let data = await respone.json()
    console.log(data);

    if (data.cod == 200) {

        let temp = data.main.temp;
        console.log(temp);
        document.getElementById('te').innerHTML = Math.round(temp - 273.15, 2) + " &deg C";

        let status = data.weather[0].main;
        document.getElementById('st').innerHTML = status;

        let wind = data.wind.speed;
        document.getElementById('ws').innerHTML = wind;

        let humidity = data.main.humidity;
        document.getElementById('hm').innerHTML = humidity;

        let ct = data.name;
        document.getElementById('city_name').innerHTML = ct;

        let img = data.weather[0].icon;
        document.getElementById('img1').src = `https://openweathermap.org/img/w/${img}.png`;
        console.log(img);

    } else {
        document.getElementById('city_name').innerHTML = data.message;
    }

}

// weatherApp()
