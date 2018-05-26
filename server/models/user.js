const { mongoose } = require('../db/mongoose')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/secret')

const UserSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  token: {
    type: String,
    required: true
  }
})

UserSchema.methods.generateToken = function () {
  const user = this
  const token = jwt.sign({
    id: user.id
  }, secret)

  return token
}

const User = mongoose.model('User', UserSchema)

module.exports = User
