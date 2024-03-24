// Construct the API URL for geocoding
const apiUrl = `https://geocoding-api.open-meteo.com/v1/search?name=Lagos&count=1&language=en&format=json`;

// Make a request to the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(HTTP error! Status: ${response.status});
    }
    return response.json();
  })
  .then(data => {
    // Check if the response has results
    if (data && data.results && data.results.length > 0) {
      // Extract latitude and longitude from the API response
      const location = data.results[0].geometry.location;
      const latitude = location.lat;
      const longitude = location.lng;

      // Using latitude and longitude in courier service website
      console.log(Latitude: ${latitude}, Longitude: ${longitude});
      
      // Send latitude and longitude to your server for further processing
      // Example: sendLocationToServer(latitude, longitude);
    } else {
      throw new Error('No results found in the API response.');
    }
  })
  .catch(error => console.error('Error fetching geolocation:', error));
