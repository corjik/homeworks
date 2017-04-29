

var img=document.getElementById("currentPhoto");
var next=document.getElementById("nextPhoto");  
var prev=document.getElementById("prevPhoto");
var imgs=["i\\new-museum.jpg",
"i\\breuer-building.jpg",
"i\\guggenheim-museum.jpg",
"i\\headquarters.jpg",
"i\\IAC.jpg"];
var i =0;
img.src=imgs[i];


next.onclick = function(){
	if (i<imgs.length-1){
	i++
	}
	else {
	i=0;
	};
	img.src=imgs[i];
	console.log(i);
};

prev.onclick = function(){
	if (i>0){
	i--
	}
	else {
	i=imgs.length-1;
	};
	img.src=imgs[i];
	console.log(i);
};