const express = require('express');
const mongoose = require('mongoose');
const entries = require('./routes/api/entries');
const dotenv = require('dotenv').config();
const path = require('path');

var app = express();
app.use(express.json());

var db = "mongodb+srv://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@" + process.env.CLUSTER + "/" + process.env.DATABASE + "?retryWrites=true&w=majority"

mongoose
.connect(db, { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log('Successfully connected to MongoDb!'))
.catch(err => console.log(err))

app.use('/api/entries', entries);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
app.set('port', process.env.PORT || port);
app.listen(port, () => console.log(`Server started on port : ${port}`));