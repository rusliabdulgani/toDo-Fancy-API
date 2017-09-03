

var login = (req, res) => {
  FB.api('/me', {fields: ['id','name','email','picture']}, function(response){
    console.log('api me: ',response);
    res.send(response)
  })
}
