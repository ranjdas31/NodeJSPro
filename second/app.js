var exp = require('express');
var app = exp();



var port=process.env.npm_package_config_port;
app.listen (port, function(){
    console.log ("HTTP server is up on port number 3001")

});
app.get('/',function(req,res){
    res.send("Hello NodeJS WebServer");
});

app.get('/about',function(req,res){
    res.send("<HTML><body><h1>This is about US page</h1></body></HTML>");
});

//require ('express')().listen(3001);
