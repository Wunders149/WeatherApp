$(document).ready(function() {
    $("#searchBtn").click(function() {
      var city = $("#cityInput").val();
      var apiKey = "1cdb4ab25b9bcd43335ae4cb1055b816"; //API key
      var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

      $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function(data) {
          var weather = data.weather[0].description;
          var temperature = (data.main.temp - 273.15).toFixed(1);
          var humidity = data.main.humidity;
          var windSpeed = data.wind.speed;
          var cityName = data.name;

          var weatherInfo = "Weather in " + cityName + ": " + weather + "<br>";
          weatherInfo += "Temperature: " + temperature + "°C<br>";
          weatherInfo += "Humidity: " + humidity + "%<br>";
          weatherInfo += "Wind Speed: " + windSpeed + " m/s";

          $("#weatherInfo").html(weatherInfo);
        },
        error: function(xhr, status, error) {
          $("#erreur").html("Erreur: Ville non trouvé!");
        }
      });
    });
  });