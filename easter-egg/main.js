
document.addEventListener('keydown', showPanel);
document.addEventListener('keydown', secret);
var secretWord = Array.from("ytnjkjubz");
var i=0;
 
function showPanel(event) { 
	if (event.code=="KeyT" && event.altKey && event.ctrlKey){
	document.getElementsByTagName('nav')[0].classList.toggle("visible");
	};
};
function secret(event){
	letter = event.code;
	checkLetter();
	i++
	checkWord();
};


function checkLetter(){
	if (letter == "Key"+secretWord[i].toUpperCase()){
	}
	else{
		i=0;
	};
};

function checkWord(){
	console.log(i);
	if (i == secretWord.length){
		document.getElementsByClassName('secret')[0].classList.add("visible");
		i=0;
	};
};