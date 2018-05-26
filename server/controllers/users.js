const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { validateSign } = require('../middlewares/auth')

router.post('/', validateSign, async function (req, res) {
  const user = new User({address: req.address})
  const token = user.generateToken()
  user.token = token
  await user.save()

  res.send({ token })
})

module.exports = router
