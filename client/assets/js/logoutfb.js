// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      var dataUSer = {fbaccesstoken: response.authResponse.accessToken, userID: response.authResponse.userID}
      localStorage.setItem('fbaccesstoken', JSON.stringify(dataUSer))
      getDataUser()
    }else{
      localStorage.removeItem('fbaccesstoken')
        window.location.href='index.html'
    }
  }
  
  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  window.fbAsyncInit = function() {
 FB.init({
   appId      : '396058347463475',
   cookie     : true,  // enable cookies to allow the server to access 
                       // the session
   xfbml      : true,  // parse social plugins on this page
   version    : 'v2.8' // use graph api version 2.8
 });

 FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });

   };

   // Load the SDK asynchronously
   (function(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) return;
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   function getDataUser() {
     var accessToken = JSON.parse(localStorage.getItem('fbaccesstoken'))
     axios.get(`http://localhost:3000/api/user/login-facebook`, {
       headers: {
         fbaccesstoken: accessToken.fbaccesstoken,
         userID: accessToken.userID
       }
     })
     .then( result => {
       var token = JSON.parse(localStorage.getItem('fbaccesstoken'))
       token['_id'] = result.data._id
       localStorage.setItem('fbaccesstoken',JSON.stringify(token))
     })
     .catch( err => {
       console.log(err);
     })
   }
   
   var app = new Vue({
     el: '#app',
     data: {
       todolist: [],
       user_id: '',
       done: false
     },
     computed: {
       doneValue(){
         return this.done ? 'selesai' : 'belum selesai'
       }
     },
     created: function(){
       var accessToken = JSON.parse(localStorage.getItem('fbaccesstoken'))
       axios.get(`http://localhost:3000/api/user/login-facebook`, {
         headers: {
           fbaccesstoken: accessToken.fbaccesstoken,
           userID: accessToken.userID,
           _id: accessToken._id
         }
       })
       .then( result => {
         var token = JSON.parse(localStorage.getItem('fbaccesstoken'))
         token['_id'] = result.data._id
         localStorage.setItem('fbaccesstoken',JSON.stringify(token))
         axios.get(`http://localhost:3000/api/todo-user`, {
           headers: {
             fbaccesstoken: token.fbaccesstoken,
             userID: token.userID,
             _id: token._id
           }
         })
         .then( hasil => {
           this.todolist = hasil.data
         })
       })
       .catch( err => {
         console.log(err);
       })
       
     }
   })
   
