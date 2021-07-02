const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username : String,
  password : String
},  {
        timestamps:true,
        versionKey:false
    
})

module.exports = mongoose.model('user', UserSchema)