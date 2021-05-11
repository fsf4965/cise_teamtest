const express = require('express');
const router = express.Router()

const Entry = require('../../models/entry');


router.get('/test', (req, res) => res.send('book route testing!'));

// router.get('/', (req, res) => {
//   Entry.find()
//       .then(entries => res.json(entries))
//       .catch(err => res.status(404).json({ nobooksfound: 'Entries Found' }));
// });

// router.get('/:id', (req, res) => {
//   Book.findById(req.params.id)
//     .then(entries => res.json(entries))
//     .catch(err => res.status(404).json({ nobookfound: 'No Entries found' }));
// });

module.exports = router 