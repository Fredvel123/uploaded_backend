const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }, 
  image: {
    type: String,
    required: false,
  } 
}, {
  timestamps: true, 
  versionKey: false
})

module.exports = model('users', userSchema);