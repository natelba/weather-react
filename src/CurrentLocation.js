import React, {useState} from "react";

export default function CurrentLocation(response){
    function searchLocation(position) {
        let apiKey = "67530174dacc3fcebbae46692eea5dd9";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
      
        axios.get(apiUrl).then(displayWeatherCondition);
      }
    
      function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);
      }
      let currentLocationButton = document.querySelector("#current-location-button");
      currentLocationButton.addEventListener("click", getCurrentLocation);
    
    
      search("New York");
      return(
          <div className="CurrentLocation">
              <button class="btn btn-success w-20" id="current-location-button">
                        Current
                      </button>
          </div>
      );
}