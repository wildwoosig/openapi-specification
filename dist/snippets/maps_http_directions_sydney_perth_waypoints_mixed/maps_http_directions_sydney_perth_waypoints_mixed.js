// [START maps_http_directions_sydney_perth_waypoints_mixed]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=Sydney, AU&destination=Perth, AU&waypoints=side_of_road:via:enc:lexeF{~wsZejrPjtye@:&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_sydney_perth_waypoints_mixed]