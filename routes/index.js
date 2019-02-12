const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const router = express.Router();

router.get('/get-weather', (req, res) => {
  const { lat, lon } = req.query;
  const errorMessage = 'Please enter valid latitude and longitude values.';

  if (!Number(lat) || !Number(lon)) {
    return res.json({
      error: errorMessage,
    });
  }

  forecast
    .getWeather({ lat, lon })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

module.exports = router;
