const request = require('request');

const getWeather = latLng =>
  new Promise((resolve, reject) => {
    const { lat, lng } = latLng;
    const latLngUrl = `${lat},${lng}`;
    const key = process.env.WEATHER_KEY;
    const weatherUrl = `https://api.darksky.net/forecast/${key}/${latLngUrl}?units=si`;

    request(
      {
        url: weatherUrl,
        json: true,
      },
      function(error, response, body) {
        if (error) {
          reject('Unable to connect Weather Server');
        } else if (!error && response.statusCode === 200) {
          resolve(body);
        }
      },
    );
  });

module.exports = {
  getWeather,
};
