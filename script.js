//your JS code here. If required.
function upperCase(){
	const thename= document.getElementById("fname");
	thename.addEventListener("blur", function(){
		thename.value=thename.value.toUpperCase()
	});
}
upperCase();