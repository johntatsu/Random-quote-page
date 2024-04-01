const colors = [
	"#16a085",
	"#27ae60",
	"#2c3e50",
	"#f39c12",
	"#e74c3c",
	"#9b59b6",
	"#FB6964",
	"#342224",
	"#472E32",
	"#BDBB99",
	"#77B1A9",
	"#73A857",
];

let message = "";
const quotesList = [
	{
		quoteText: "Learning is a treasure that will follow its owner everywhere.",
		author: "Chinese Proverb",
	},
	{
		quoteText: "An investment in knowledge pays the best interest.",
		author: "Benjamin Franklin",
	},
	{
		quoteText:
			"Change your life today. Don't gamble on the future, act now, without delay.",
		author: "Simone de Beauvoir",
	},
	{
		quoteText: "If you don't prioritize your life, someone else will.",
		author: "Greg Anderson",
	},
	{
		quoteText: "It's never too late to be what you might have been.",
		author: "George Eliot",
	},
];

$(document).ready(function () {
	let message =
		document.getElementById("text").textContent +
		" - " +
		document.getElementById("author").textContent;
	$("#new-quote").on("click", getQuote);
	$("#tweet-quote").on("click", confirmTweet);
});

function tweet() {
	const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
		message
	)}`;
	// alert(message);

	window.open(url, "_blank");
}

function confirmTweet() {
	var modal = document.getElementById("myModal");

	// Get the <span> element that closes the modal
	var close = document.getElementsByClassName("close")[0];
	var yes = document.getElementsByClassName("yes")[0];
	// When the user clicks the button, open the modal
	// modal.style.display = "block";
	$("#myModal").css({
		display: "block",
	});

	// When the user clicks on <span> (x), close the modal
	close.onclick = function () {
		modal.style.display = "none";
	};

	yes.onclick = function () {
		modal.style.display = "none";
		tweet();
	};

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
		}
	};
}
function getQuote() {
	let quote = quotesList[Math.floor(Math.random() * quotesList.length)];
	let color = colors[Math.floor(Math.random() * colors.length)];
	console.log(colors[Math.floor(Math.random() * colors.length)]);
	$(".quote-text, #author, #tweet-quote, #tumblr-quote").css({
		transition: "color 1s",
		color: color,
	});
	$("body, #new-quote").css({
		transition: "background-color 1s",
		backgroundColor: color,
	});
	document.getElementById("text").innerHTML = quote.quoteText;
	document.getElementById("author").innerHTML = "- " + quote.author;
	message = `"${quote.quoteText}" - ${quote.author} #quotes`;
}

// Function to be executed when the page finishes loading
function executeOnLoad() {
	console.log(quotesList);
	getQuote();
}

// Register the function to be executed when the page finishes loading
window.onload = executeOnLoad;
