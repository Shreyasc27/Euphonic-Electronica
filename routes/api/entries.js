const express = require('express');
const cors = require('cors')
const router = express.Router();

const Entry = require('../../models/Entry');

// @route  GET api/entries
// @desc   Get All Entries
// @access Public 
router.get('/', cors(), (req, res, next) => {
    Entry
    .find()
    .sort({ episodenumber: -1 })
    .then(entries => res.json(entries));
});

// @route  POST api/entries
// @desc   Create an Entry
// @access Public 
router.post('/', (req, res) => {
    const newEntry = new Entry({
        episodenumber: req.body.episodenumber,
        episodedate: req.body.episodedate,
        episodesoundcloud: req.body.episodesoundcloud,
        episodetracklist: req.body.episodetracklist,
        artistname: req.body.artistname,
        artistspotify: req.body.artistspotify,
        artisttwitter: req.body.artisttwitter,
        artistfacebook: req.body.artistfacebook,
    });
    newEntry
    .save()
    .then(entry => res.json(entry));
});

// @route  DELETE api/enteries/:id
// @desc   Delete An Entry
// @access Public 
router.delete('/:id', (req, res) => {
    Entry.findById(req.params.id)
    .then(entry => entry.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;