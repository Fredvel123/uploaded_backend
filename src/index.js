<<<<<<< HEAD
const express = require('express')
const app = express()
const port = 8080
=======
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

// users routers API
app.use('/api/users', require('./routers/userRouters'));
>>>>>>> eb8b06e31416a3c9fb79a82f8b31284a3172a15b

app.get('/', (req, res) => {
  res.send('Hello World!')
})

<<<<<<< HEAD
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`)
=======
app.listen(app.get('port'), () => {
  console.log(`the server is listening on port http://localhost:${app.get('port')}`)
>>>>>>> eb8b06e31416a3c9fb79a82f8b31284a3172a15b
})