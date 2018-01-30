var exp=require('express');
var app=exp();
var cors = require('cors');
var path = require("path");
var gpioadmin = require('./ledcontrol.js')
app.use(cors());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();});

app.get('/',function(req,resp)
{
app.use(exp.static('static'))
app.use('/static', exp.static('css'))
app.use('/static', exp.static('images'))
resp.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/BulbStatus',function(req,resp)
{
var out= gpioadmin.BulbStatus()
resp.send(out);
});

app.get('/Bulb/:status',function(req,resp)
{
var  status = req.params.status;
console.log(JSON.stringify(req.params.status) );
if(status.toLowerCase() == 'on' ){
  console.log("Bulb ON" + JSON.stringify(req.params));
	//code to Make Bulb ON
	gpioadmin.BulbOn()
	//Code to get the Bulb Status
	var out= gpioadmin.BulbStatus()
resp.send(out);
console.log(out)
}
else{
console.log("Bulb Off" + JSON.stringify(req.params));
	//code to Make Bulb OFF
	gpioadmin.BulbOff()
	//Code to get the Bulb Status
	var out= gpioadmin.BulbStatus()
resp.send(out);
console.log(out);
}


});

app.get('/BulbOff',function(req,resp)
{
	//code to Make Bulb OFF
	gpioadmin.BulbOff()
	//Code to get the Bulb Status
	var out= gpioadmin.BulbStatus()
resp.send(out);
console.log(out)
});


var server=app.listen(8082,function(){})