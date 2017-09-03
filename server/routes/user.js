var express = require('express');
var router = express.Router();
var FB = require('fb');
var fb = new FB.Facebook({version: 'v2.8'})
var controllers = require('../controllers/fblogincontroller')




/* GET users listing. */
router.get('/user/login-facebook', controllers.setAccessToken, controllers.login);
router.get('/user', controllers.setAccessToken, controllers.getDataUser);
router.delete('/user/:id', controllers.setAccessToken, controllers.removeUser);
router.get(`/todo`, controllers.setAccessToken, controllers.getTodo);
router.get(`/todo-user`, controllers.getTodoUser);
router.post('/todo', controllers.createTodo);
router.delete('/todo/:id', controllers.deleteTodo);

module.exports = router;
