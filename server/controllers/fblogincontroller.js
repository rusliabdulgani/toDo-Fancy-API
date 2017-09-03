var modelUser = require('../models/user')
var modelTodo = require('../models/todo')
var FB = require('fb');
var fb = new FB.Facebook({version: 'v2.8'})

var setAccessToken = (req, res, next) => {
  if(req.headers.fbaccesstoken!== undefined){
  FB.setAccessToken(req.headers.fbaccesstoken);
  next()
  }else{
    res.send('anda tidak memiliki akses token fb/ akses token fb anda salahhhhh')
  }
}

var login = (req, res) => {
  FB.api('/me', {fields: ['id','name','email','picture']}, function(response){
    modelUser.findOne({
      id: response.id
    })
    .then( data => {
      if(data == null) {
        model.create({
          id: response.id,
          name: response.name,
          email: response.email
        })
        .then( data => {
          console.log(`data ${response} berhasil disimpan di mongo atlas`);
          res.send(data)
        })
        .catch(err => {
          console.log(`data error atau sudah ada di db atlas mongo ${err}`);
        })
      }else{
        res.send(data)
      }
    })
    .catch( (err) => {
      console.log(err);
    })
  })
}

var getDataUser = ( req, res ) => {
  modelUser.find({})
  .populate('todolist')
  .then( data => {
    console.log(data);
    res.send(data)
  })
  .catch( err => {
    console.log(err);
    res.send(err)
  })
}

var removeUser = (req, res) => {
  modelUser.remove({
    _id: req.params.id
  })
  .then( data => {
    res.send(data)
  })
  .catch( err =>{
    res.send(err)
  })
}

var getTodo = (req, res) => {
  modelTodo.find({})
  .populate('userId')
  .then( data => {
    res.send(data)
  })
  .catch( err => {
    res.send(err)
  })
}

var getTodoUser = (req, res) => {
  modelTodo.find({
    'userId': req.headers._id
  })
  .populate('userId')
  .then( data => {
    res.send(data)
  })
  .catch( err => {
    res.send(err)
  })
}

var createTodo = (req, res) => {
  modelTodo.create({
    todo: req.body.todo,
    userId: header._id,
    done: false
  })
  .then( data => {
    console.log(data);
    res.send(data)
  })
  .catch( err => {
    console.log(err);
    res.send(err)
  })
}

var deleteTodo = ( req, res) => {
  modelTodo.remove({
    _id: req.params.id
  })
  .then( data => {
    res.send(data)
  })
  .catch( err => {
    res.send(err)
  })
}



module.exports = {
  login,
  getDataUser,
  removeUser,
  getTodo,
  getTodoUser,
  createTodo,
  deleteTodo,
  setAccessToken
}
