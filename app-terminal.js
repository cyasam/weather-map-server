require('dotenv').config();

const fs = require('fs');
const yargs = require('yargs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address for weather',
      type: 'string',
    },
  })
  .help()
  .alias('help', 'h').argv;

const address = argv.a;
geocode
  .getAddress(address)
  .then(body => {
    const { lat, lng } = body;
    return forecast.getWeather({ lat, lng });
  })
  .then(body => {
    const result = JSON.stringify(body, null, 2);
    fs.writeFileSync('weather.json', result);

    console.log('Weather result file created.');
  })
  .catch(error => {
    console.log(error);
  });
