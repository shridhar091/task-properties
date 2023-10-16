const express = require('express')
const configureDB = require('./config/db')
const router = require('./config/routes')
const cors = require('cors')
const port = 3090
const app = express() 

configureDB()


app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended: true}))

app.use(router)
app.use('/uploads', express.static('uploads'))


app.listen(port, () => {
    console.log('server running on port', port)
})