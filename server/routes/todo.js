// var express = require('express');
// var router = express.Router();
// var FB = require('fb');
// var fb = new FB.Facebook({version: 'v2.8'})
// var controllers = require('../controllers/fblogincontroller')
// 
// 
// var setAccessToken = (req, res, next) => {
//   console.log(req.headers, '------------------------------');
//   if(req.headers.fbaccesstoken!== undefined){
//   FB.setAccessToken(req.headers.fbaccesstoken);
//   next()
//   }else{
//     res.send('anda tidak memiliki akses token fb/ akses token fb anda salahhhhh')
//   }
// }
// /* GET users listing. */
// // router.get(`/todo`, setAccessToken, controllers.getTodo);
// // router.get(`/todo-user`, setAccessToken, controllers.getTodoUser);
// // router.post('/todo', controllers.createTodo);
// // router.delete('/todo/:id', controllers.deleteTodo);
// 
// module.exports = router;
