var pBtn=document.getElementsByClassName('playstate')[0];
var music = document.getElementsByTagName('audio')[0];
var playIcon = document.getElementsByClassName('fa-play')[0];
var pauseIcon = document.getElementsByClassName('fa-pause')[0];
var sBtn = document.getElementsByClassName('stop')[0];
var next = document.getElementsByClassName('next')[0];
var prev = document.getElementsByClassName('back')[0];
var title = document.getElementsByClassName('title')[0];
var playlist = ["mp3\\LA Chill Tour.mp3","mp3\\LA Fusion Jam.mp3","mp3\\This is it band.mp3"];
var songNames = ["LA Chill Tour","LA Fusion Jam", "This is it band"];
var i = 0 //номер песни
if (playIcon.style.display != "none")
{
	isPlay = false;
}
else{
	isPlay = true;
};

pBtn.onclick = function () {
	if (isPlay){
		music.pause()
	}
	else{
		music.play()
	};
	iconSwitch();
};

sBtn.onclick = function(){
	music.pause();
	music.currentTime = 0;
	playIcon.style.display = "block";
	pauseIcon.style.display = "none";
	isPlay = false;
};

next.onclick = function () {
	i++;
	if (i == playlist.length)
	{
		i = 0;
	};

	if (isPlay){
		title.setAttribute("title", songNames[i]);
		music.src = playlist[i];
		music.setAttribute("autoplay","");	
	}
	else{
		title.setAttribute("title", songNames[i]);	
		music.src = playlist[i];
		music.removeAttribute("autoplay","");	
	};
};


prev.onclick = function () {
	i--;
	console.log()
	if (i < 0)
	{
		i = playlist.length-1;
	};

	if (isPlay){
		title.setAttribute("title", songNames[i]);
		music.src = playlist[i];
		music.setAttribute("autoplay","");	
	}
	else{
		title.setAttribute("title", songNames[i]);	
		music.src = playlist[i];
		music.removeAttribute("autoplay","");	
	};
};





var iconSwitch = function(){
	if (playIcon.style.display != "none")
	{
		playIcon.style.display = "none";
		pauseIcon.style.display = "block";
		isPlay = true;
	}
	else 
	{
		pauseIcon.style.display = "none";
		playIcon.style.display = "block"
		isPlay = false;
	};
};
