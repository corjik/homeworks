var btn = document.getElementsByTagName('li');

for (var btns of btn) {
	btns.onclick = function() {
		var music = this.getElementsByTagName('audio');
		music[music.length-1].play();
	};
};