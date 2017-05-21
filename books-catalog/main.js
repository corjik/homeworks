const books = new XMLHttpRequest();
books.open('GET', 'https://netology-fbb-store-api.herokuapp.com/book', true);
books.send();

books.addEventListener("load", onLoad);

function onLoad(){
	if (books.status === 200) {
	booksList = JSON.parse(books.responseText);
  	console.log("1");
  	console.log(booksList);
  	addLi(booksList);
  };
};

function addLi(list){
	for (i = 0; i < list.length; i++){
		console.log(list[i].title);
		var newBook = document.createElement("li");
		document.getElementById('content').appendChild(newBook);
		newBook.dataset.title = list[i].title;
		newBook.dataset.author = list[i].author.name;
		newBook.dataset.info = list[i].info;
		newBook.dataset.price = list[i].price;
		newBook.innerHTML = '<img src="' + list[i].cover.small + '">';
	};

};


