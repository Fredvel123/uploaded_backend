const Users = require('../models/usersSchema');
const bcrypt = require('bcryptjs'); // bcrypt is for hashing passwords.
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

// code to create a new user, "Sign Up"
const createNewUser = (req, res) => {
  const user = new Users(req.body);
  bcrypt.hash(user.password, 10, async (err, hash) => {
    if(err) {
      res.json({
        isCreated: false,
        message: "something is bad"
      })
    } else {
      user.password = hash; // password is already hashed :)
      const newUser = await user.save();
      res.json({
        isCreated: true,
        message: `user: ${newUser.name} was created successfully.`
      });
    }
  })
}

// code to verify user created, "Log In"
const registerUser = async (req, res) => {
  const user = await Users.findOne({email: req.body.email});
  if(user) {
    bcrypt.compare(req.body.password, user.password, (err, data) => { // Bcryptjs 
      if(data) {
        const _token = jwt.sign({id: user._id}, process.env.KEY_JWT, {expiresIn: 60*30}) // JWT
        res.json({
          isLogged: true,
          token: _token
        })
      } else {
        res.json({
          isLogged: false,
          message: "the password isn't correct"
        })
      }
    })
  } else {
    res.json({
      isLogged: false,
      message: 'your email is not correct'
    })
  }
}

// verify token function (Middleware)
const verifyToken = (req, res, next) => {
  const token = req.headers['access-token'];
  if(token) {
    jwt.verify(token, process.env.KEY_JWT, (err, payload) => {
      if(err) {
        res.json({
          auth: false,
          message: 'your token is not valid'
        })
      } else {
        res.userId = payload.id;
        next();
      }
    })
  } else {
    res.json({
      auth: false,
      message: 'you have no access here, you need a token'
    })
  }  
}


// code to test the API.
const getAllUsers = async (req, res) => {
  const users = await Users.find();
  res.json(users);
}

module.exports = {
  getAllUsers,
  createNewUser,
  registerUser, 
  verifyToken
}