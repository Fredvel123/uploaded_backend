const express = require('express')
const app = express()
// middlewares
app.use(express.json()); // code to express understand json objects

// config
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// here is the Data Base. you need to set up your mongodb in your computer.
// to configure only write "mongod" in another terminal.
require('./database');

app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})