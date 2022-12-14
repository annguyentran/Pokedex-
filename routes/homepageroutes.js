const router = require('express').Router();
const { Pokemon, Trainer, PokemonTrainer } = require('../models');

router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;