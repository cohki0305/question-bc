const express = require('express')
const router = express.Router()
const Question = require('../models/question')

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find()
    res.send({ questions })
  } catch (e) {
    res.status(400).send(e)
  }
})

router.post('/', async (req, res) => {
  const { title, content } = req.body
  const question = new Question({ title, content })

  try {
    const doc = await question.save()
    res.send(doc)
  } catch (e) {
    res.status(400).send(e)
  }
})

module.exports = router
