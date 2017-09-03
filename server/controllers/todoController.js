// var model = require('../models/todo')
// var express = require('express')
// var router = express.Router();
// 
// var getTodo = (req, res) => {
//   model.find({})
//   .populate('userId')
//   .then( data => {
//     res.send(data)
//   })
//   .catch( err => {
//     res.send(err)
//   })
// }
// 
// var getTodoUser = (req, res) => {
//   console.log('=========================',req.headers);
//   model.find({
//     'userId': req.headers._id
//   })
//   .populate('userId')
//   .then( data => {
//     res.send(data)
//   })
//   .catch( err => {
//     res.send(err)
//   })
// }
// 
// var createTodo = (req, res) => {
//   var headers = JSON.parse(req.headers.fbaccesstoken)
//   console.log('+++++++++++++++++++++++++++++++++++',headers._id);
//   console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',req.body);
//   model.create({
//     todo: req.body.todo,
//     userId: headers._id,
//     done: false
//   })
//   .then( data => {
//     console.log(data);
//     res.send(data)
//   })
//   .catch( err => {
//     console.log(err);
//     res.send(err)
//   })
// }
// 
// var deleteTodo = ( req, res) => {
//   model.remove({
//     _id: req.params.id
//   })
//   .then( data => {
//     res.send(data)
//   })
//   .catch( err => {
//     res.send(err)
//   })
// }
// 
// module.exports ={
//   getTodo,
//   getTodoUser,
//   createTodo,
//   deleteTodo
// }
