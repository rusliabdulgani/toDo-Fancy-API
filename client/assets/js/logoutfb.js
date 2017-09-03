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
         fbaccesstoken: accessToken.fbaccesstoken
       }
     })
     .then( result => {
       console.log(result);
     })
     .catch( err => {
       console.log(err);
     })
   }
   
