const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const router = express.Router();

router.get('/get-weather', (req, res) => {
  const { latlng } = req.query;

  const [lat, lng] = latlng.split(',');

  if (Number(lat) && Number(lng)) {
    forecast
      .getWeather({ lat, lng })
      .then(response => {
        res.json(response);
      })
      .catch(error => {
        res.json({ error: error.message });
      });
  } else {
    res.json({ error: 'Please enter valid latitude and longitude values.' });
  }
});

module.exports = router;
