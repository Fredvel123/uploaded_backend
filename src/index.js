const express = require('express');
const app = express();
const cors =  require('cors');

// middlewares
app.use(express.json()); // cuz express dosen't understand json objects.
app.use(cors()); // cors, to avoid problems in the future with the frontend.

// config
app.set('port', process.env.PORT || 8000);

// here is the Data Base. you need to set up your mongodb in your computer.
require('./database');  // to configure only write "mongod" in another terminal.

// Routers


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
  console.log(`the server is listening on port http://localhost:${app.get('port')}`)
})