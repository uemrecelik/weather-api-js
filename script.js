
var loc = document.querySelector('.location');
var temp = document.querySelector('.temp');
var icon = document.querySelector('.icon');
const api = "" // YOUR API KEY FROM OPENWEATHERMAP
var lat,lng;

navigator.geolocation.getCurrentPosition(geoLocationCallback);
function geoLocationCallback(pos) {
     lat = pos.coords.latitude;
     lng = pos.coords.longitude;
    
     fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid="+api).then((response) => response.json())
     .then((data) => callBack(data));
     
     function callBack(data){
         console.log(data);
         loc.innerHTML = data.name;
         temp.innerHTML = Math.round(data.main.temp - 273.15);
         document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + data.name+ "')";
         
         switch (data.weather[0].main) {
             case "Clear":
                 icon.src = "/assets/day.svg";
                 break;
             case "Clouds":
                 icon.src = "/assets/cloudy.svg";
                   break;  
             case "Rain":
                    icon.src = "/assets/rainy-7.svg";
                    break;   
             case "Snow":
                     icon.src = "/assets/snowy-6.svg";
                     break;    
             default:
                 break;
         }
         
         }

}

