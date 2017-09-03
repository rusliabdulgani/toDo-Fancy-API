var express = require('express');
var router = express.Router();
var FB = require('fb');
var fb = new FB.Facebook({version: 'v2.8'})
var controllers = require('../controllers/fblogincontroller')

var setAccessToken = (req, res, next) => {
  console.log(req.headers.fbaccesstoken,'=====');
  FB.setAccessToken(req.headers.fbaccesstoken);
  next()
}


/* GET users listing. */
router.get('/todo/login-facebook', setAccessToken, controllers);

module.exports = router;
