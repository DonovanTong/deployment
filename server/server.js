const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const { home, homeCss, homeJs } = require('./controllers/pageCtrl')

app.get("/", home)
app.get("/css", homeCss)
app.get("/js", homeJs)

const { PORT } = process.env

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))