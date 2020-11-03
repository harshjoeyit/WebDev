
/* Using the weather API*/

// bareilly
cityid = "1277013";
// allahabad
// cityid = 7038466;
function getWeather() {
      console.log("getWeather() called");
      $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?id="+ cityid + "&appid=35820b267950a823e277551555efda9b&units=metric",
            method:"POST",
            dataType: "json",
            success: function(data) {
                  console.log("success");
                  var city = data.name;
                  var description = data.weather[0].description
                  var temp = data.main.temp;
                  var feels_like = data.main.feels_like;
                  var iconcode = data.weather[0].icon
                  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                  $('#city').html('<b>'+ city +'</b>');
                  $('#wicon').attr('src', iconurl);
                  $('#description').html('<b>' + description + '</b>');
                  $('#temp').html('<b>Temp: </b>' + temp);
                  $('#feels_like').html('<b>Feels Like: </b>' + feels_like);
            }, 
            error: function (e) {
                  console.log("error: " + e);
            }
      });

      $.ajax({
            url: 'https://api.quotable.io/random',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                  $('#quote').html(data.content + '<br> - ' + data.author);
            },
            error: function (e) {
                  console.log('error: ' + e);
            }
      });

}
getWeather();