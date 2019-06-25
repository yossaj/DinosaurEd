const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect(process.env.MONGODB_URI || 'mongodb://heroku_c7m26j3v:nh40ci3gm69f46lbuoaohel16i@ds243317.mlab.com:43317/heroku_c7m26j3v')
  .then((client) => {
    const db = client.db('heroku_c7m26j3v');
    const dinosaursCollection = db.collection('dinosaurs');
    app.use('/api/dinosaurs', createRouter(dinosaursCollection));
  })
  .catch((err) => {
    console.error('Failed to connect to DB');
    console.error(err);
  });

const port = process.env.PORT;

app.listen(port, function() {
  console.log(`Dinosaur server running on port ${this.address().port}`);
});
