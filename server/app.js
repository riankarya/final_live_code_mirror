require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/route')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', route)
app.use(errorHandler)

app.listen(port, () => console.log(`I love you ${port}`))