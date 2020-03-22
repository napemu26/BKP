const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/api', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
})

app.use(express.json())
require('./controllers/AuthController')(app)
require('./controllers/ProjectController')(app)

app.listen(3333)
