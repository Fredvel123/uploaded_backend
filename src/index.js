const express = require('express');
const app = express();
const cors =  require('cors');
const dotenv = require('dotenv').config();

// middlewares
app.use(express.json()); // cuz express dosen't understand json objects.
app.use(cors()); // cors, to avoid problems in the future with the frontend.

// config
app.set('port', process.env.PORT || 8000);

// here is the Data Base. you need to set up your mongodb in your computer.
require('./database');  // to configure only write "mongod" in another terminal.

// Routers

// users routers API
app.use('/api/users', require('./routers/userRouters'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`)
})