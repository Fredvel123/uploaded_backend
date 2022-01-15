const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/uploaded_db';

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(URI, config)
  .then(db => console.log('data base connected :)'))
  .catch(err => console.log(err))