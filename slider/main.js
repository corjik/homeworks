
var imgs=document.getElementById("slider");
var pics = ["i\\airmax-on-foot.png","i\\airmax-playground.png","i\\airmax-top-view.png","i\\airmax.png","i\\airmax-jump.png"];
var i=0;
imgs.src=pics[4];
var slider = setInterval(function(){
	imgs.src=pics[i];
	i++
	if (i>=pics.length){
		i=0;
	};

},5000);

