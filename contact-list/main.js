var contacts = JSON.parse(loadContacts());
var contactSpot = document.querySelector(".contacts-list");

contactSpot.querySelector("li").remove();

for (i = 0; i<contacts.length; i++){
	console.log(contacts[i].name);
	var newContact = document.createElement("li");
	contactSpot.appendChild(newContact);
	newContact.dataset.email = contacts[i].email;
	newContact.dataset.phone = contacts[i].phone;
	newContact.innerHTML = "<strong>"+ contacts[i].name +"</strong>"
};

