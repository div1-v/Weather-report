let weather={
    "apiKey":"6a9cfdfffc72a0e25e9300e666a1b4d2",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=matric&&appid="
        +this.apiKey
        ) 
        .then((response) => response.json())
        .then((data)=>this.displayWeather(data));
    },

    displayWeather:function(data){
        const{name}=data;
        const {icon,description }=data.weather[0];
        const {temp, humidity }=data.main
        const {speed }=data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText ="Weather in "+ name;
       
        document.querySelector(".description").innerText=description;
        let p=parseInt(temp-273);
        document.querySelector(".temp").innerText=p+"°C";
        document.querySelector(".humidity").innerText="Humidity "+humidity +"%";
        document.querySelector(".wind").innerText="Wind spped: "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
        
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document
.querySelector(".search button")
.addEventListener("click",function(){
   weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
     if(event.key=="Enter"){
        weather.search();
     }
});

weather.fetchWeather("Bangalore");
        