const Users = require('../models/usersSchema');
const bcrypt = require('bcryptjs'); // bcrypt is for hashing passwords.

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
      user.password = hash; // password already hashed :)
      const newUser = await user.save();
      res.json({
        isCreated: true,
        message: `user: ${newUser.name} was created successfully.`
      });
    }
  })
}

// code to test the API.
const getAllUsers = async (req, res) => {
  const users = await Users.find();
  res.json(users);
}

module.exports = {
  getAllUsers,
  createNewUser
}