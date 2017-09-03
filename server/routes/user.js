var express = require('express');
var router = express.Router();
var FB = require('fb');
var fb = new FB.Facebook({version: 'v2.8'})
var controllers = require('../controllers/fblogincontroller')

var setAccessToken = (req, res, next) => {
  console.log(req.headers.fbaccesstoken,'=====');
  if(req.headers.fbaccesstoken!== undefined){
  FB.setAccessToken(req.headers.fbaccesstoken);
  next()
  }else{
    res.send('anda tidak memiliki akses token fb/ akses token fb anda salah')
  }
}


/* GET users listing. */
router.get('/user/login-facebook', setAccessToken, controllers.login);
router.get('/user', setAccessToken, controllers.getDataUser);
router.delete('/user/:id', setAccessToken, controllers.removeUser);

module.exports = router;
