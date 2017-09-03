const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  name:String,
  email: {
    type: String,
    unique: true
  },
  todolist: [{
    type: Schema.Types.ObjectId,
    ref: 'Todo'
  }]
})

var userModel = mongoose.model('User', userSchema)

module.exports = userModel
