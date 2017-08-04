function callServer() {
	fetch('http:localhost:3000/poop').then((response)=>response.text().then((text)=>{
	
	console.log(text);
	var msg = document.getElementById("server-message");
	msg.innerHTML = text;
	}));		
}


