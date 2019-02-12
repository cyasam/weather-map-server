const request = require('request');

const getAddress = address =>
  new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    const key = process.env.GEOCODE_KEY;
    const addressUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`;

    request(
      {
        url: addressUrl,
        json: true,
      },
      function(error, response, body) {
        if (error) {
          reject('Unable to connect Map Server');
        } else if (!error && body) {
          const result = body.results[0];
          const {
            location: { lat, lng },
          } = result.geometry;

          resolve({ lat, lng });
        }
      },
    );
  });

module.exports = {
  getAddress,
};
