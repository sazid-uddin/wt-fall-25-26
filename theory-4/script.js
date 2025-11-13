document.getElementById("myButton").addEventListener("click", () => {
	var header = document.getElementById("header");
	console.log(header.innerText);
	header.innerText = "Something else";

	var paragraphs = document.getElementsByTagName("p");
	console.log(paragraphs);

	var reds = document.getElementsByClassName("red");
	console.log(reds);

	// header.remove();

	const header3 = document.createElement("h3");
	header3.innerText = "Subtitle";
	document.body.appendChild(header3);

	var ul = document.getElementsByTagName("ul")[0];
	var newItem = document.createElement("li");
	newItem.innerText = "Item 3";
	ul.appendChild(newItem);
});


function myFunction() {
	// this functionality moved to arrow function above
}