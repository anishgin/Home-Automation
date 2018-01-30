#Home Automation:
This Elaborates the control of LED (you can use relay - normal bulb/appliance combination) through a web portal or using API kind of request. This is powered by Node JS at the back end. 

#Hardware: 
1. Raspberry Pi (I am using Model 3)
2. Resistance - 1k
3. LED 
4. Connecting wires, bread board (optional)

#Programs:
1. Node JS
	Node JS Libraries 
	a) Express : web application framework for Node.js
	b) onoff   : To control the raspberry Pi gpio pins
	c) cors (not required) : When Front end (tomcat-HTML) requests the NodeJs, both running on same host but different ports, we need this library. The code attached here have the HTML served by NodeJs. You can use this when HTML is served by tomcat running on one port and back end server is on other port.
2. localtunnel or Ngrok for tunneling that enables you to access the webpage from internet.	
	localtunnel is free. You can get your subdomain name too. Example,anishg.localtunnel.me. But, this is not certain. It crashes in few minutes. The bug id : https://github.com/localtunnel/localtunnel/issues/81
	
	Ngrok is great tool. They will provide a rando url for free. If you want sub domain, you need to pay.
	
	
#Pre required:
1. Install NodeJs
2. Internet (optional). You can access within the sub domains.


#Raspberry connection 
Here, LED is connected to GPIO pin 14 of raspberry. 

