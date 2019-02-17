const request = require('request');

const getAllWeather = cities => {
  const promiseMap = cities.map(city => getWeather(city));

  return Promise.all(promiseMap);
};

const getWeather = ({ lat, lon, name }) =>
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
          body.name = name;
          body.coord.lon = lon;
          body.coord.lat = lat;
          resolve(body);
        }
      },
    );
  });

module.exports = {
  getWeather,
  getAllWeather,
};
