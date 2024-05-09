
function pick(val) {
	document.getElementById('myinput').value += val;

}

function clr() {
	 document.getElementById('myinput').value = " ";

}

 let result = () =>{
 		let x = document.getElementById('myinput').value;
 		let y =eval(x);
 		document.getElementById('myinput').value = y;
 }