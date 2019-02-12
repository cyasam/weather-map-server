const request = require('request');

const getWeather = ({ lat, lon }) =>
  new Promise((resolve, reject) => {
    const key = process.env.WEATHER_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

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
