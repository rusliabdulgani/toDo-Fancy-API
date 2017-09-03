var model = require('../models/user')
var FB = require('fb');
var fb = new FB.Facebook({version: 'v2.8'})

var login = (req, res) => {
  FB.api('/me', {fields: ['id','name','email','picture']}, function(response){
    model.create({
      id: response.id,
      name: response.name,
      email: response.email
    })
    .then( data => {
      console.log(`data ${response} berhasil disimpan di mongo atlas`);
      res.send(data)
    })
  })
}

var getDataUser = ( req, res ) => {
  model.find({})
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
  model.remove({
    _id: req.params.id
  })
  .then( data => {
    res.send(data)
  })
  .catch( err =>{
    res.send(err)
  })
}

module.exports = {
  login,
  getDataUser,
  removeUser
}
