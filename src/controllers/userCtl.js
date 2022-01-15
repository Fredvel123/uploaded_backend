const Users = require('../models/usersSchema');

// code to test the API.
const getAllUsers = async (req, res) => {
  const users = await Users.find();
  res.json(users);
}

module.exports = {
  getAllUsers
}