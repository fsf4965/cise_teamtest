const express = require('express');
const router = express.Router()

const entry = require('../../models/entry');


router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
  entry.find()
      .then(entries => res.json(entries))
      .catch(err => res.status(404).json({ nobooksfound: 'Entries Found' }));
});

router.get('/:year', (req, res) => {
  Book.findById(req.params.year)
    .then(entries => res.json(entries))
    .catch(err => res.status(404).json({ nobookfound: 'No Entries found' }));
});

module.exports = router 