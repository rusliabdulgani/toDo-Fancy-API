const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  todo: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

var todoModel = mongoose.model('Todo', todoSchema)

module.exports = todoModel
