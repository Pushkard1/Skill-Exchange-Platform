const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config
const routes = require('./routes')

const app = express()

const port = 8000
routes(app)
app.listen(port,() => console.log(`server is running on port ${port}`))
