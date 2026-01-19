const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     isPresent:{
        type:Boolean,
        default:true
     },
     
      date: {
    type: String
  }
})

module.exports = mongoose.model('studentsdatas',studentSchema)