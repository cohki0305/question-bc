const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  process.env.PORT = 3001
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Question'
} else if (env === 'test') {
  process.env.PORT = 3002
  process.env.MONGODB_URI = 'mongodb://localhost:27017/QuestionTest'
}
