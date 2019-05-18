window.onload = function(){
	var obtn = document.getElementById('backtop');

	obtn.onclick = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;

		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
}