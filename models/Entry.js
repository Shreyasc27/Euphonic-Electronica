const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    episodenumber:{
        type: Number
    },
    episodedate:{
        type: String
    },
    episodesoundcloud:{
        type: String
    }
    ,
    episodetracklist:{
        type: String
    },
    artistname:{
        type: String
    },
    artistspotify:{
        type: String
    },
    artisttwitter:{
        type: String
    },
    artistfacebook:{
        type: String
    }
});

module.exports = Entry = mongoose.model('entries', EntrySchema);