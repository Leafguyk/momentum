const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}
function onGeoError(){
    alert("Your coords are unknown. Weather services unavailable")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
