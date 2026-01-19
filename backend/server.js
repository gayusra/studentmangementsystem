const express = require('express') 
const mongoose = require('mongoose')
const cors = require('cors')
const studentRoutes = require('./routes/studentRoutes')

const app = express()

app.use(express.json())
app.use(cors())



//connect with db
mongoose.connect('mongodb://127.0.0.1:27017/attendenceDB')
.then(() =>console.log('mongodb conneted'))
.catch(err =>console.log(err))


app.use('/api/students',studentRoutes)
app.listen(8080,() =>{
    console.log('server is running on the port')
})