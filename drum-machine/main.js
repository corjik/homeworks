var btn=document.getElementsByTagName('li')

console.log(btn);
var music;
for (var i=0;i<btn.length;i++){
	btn[i].onclick = function(){
	var music = this.getElementsByTagName('audio');
	music[music.length-1].play();
	};
};