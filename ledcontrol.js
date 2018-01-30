var Gpio = require('onoff').Gpio
Bulb = new Gpio(14, 'out')

module.exports.BulbOn = function(){
console.log('Making Bulb ON');
Bulb.writeSync(1)
}

module.exports.BulbOff = function(){
console.log('Making Bulb OFF');
Bulb.writeSync(0)
}

module.exports.BulbStatus = function(){
var kan=Bulb.readSync();
console.log(kan);
if (kan)
	{return "TRUE";}
else
	{return "FALSE";}
}