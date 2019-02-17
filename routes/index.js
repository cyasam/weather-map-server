const express = require('express');
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');

const router = express.Router();

router.get('/get-all-weather', (req, res) => {
  const { level } = req.query;
  const errorMessage = 'Please enter valid level value.';

  if (isNaN(level)) {
    return res.json({
      error: errorMessage,
    });
  }

  const levelLabel = `level${level}`;
  const cities = require('../json/cities.json')[levelLabel];
  if (!cities) {
    return res.json({ [levelLabel]: [] });
  }

  forecast
    .getAllWeather(cities)
    .then(response => {
      res.json({ [levelLabel]: response });
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

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
