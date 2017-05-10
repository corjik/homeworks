var menu=document.getElementsByClassName("wrapper-dropdown");
var menuAr=Array.from(menu);
console.log(menuAr);




menuAr[0].onclick = function () {
	menuAr[0].classList.toggle("active");
}