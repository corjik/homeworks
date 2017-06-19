var btns = document.getElementsByTagName('li');

for (var btn of btns) {
	btn.onclick = function() {
		var music = this.getElementsByTagName('audio')[0];
		music.play();
	};
};