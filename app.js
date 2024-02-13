const cardArray = [
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
];

cardArray.sort(() => 0.5 - Math.random()); //sort ordina l'array ma con math random lo ordina a caso

const gridDisplay = document.querySelector("#grid");

const cardChosen = [];

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		//parti da 0 e finchè i è minore di 10 incrementa di 1
		const card = document.createElement("img"); //creiamo un elemento img
		card.setAttribute("src", "images/blank.png"); //a src gli diamo images...
		card.setAttribute("data-id", i); //a data-id gli diamo i che andra da a 1 a 10
		card.addEventListener("click", flipCard); //passiamo un evento a card che quando viene cliccato richiama una callback
		gridDisplay.append(card);
	}
}

createBoard();

function checkMatch() {
	console.log("check for match");
	if (cardChosen[0] == cardChosen[1]) {
		alert("you found a match");
	}
}

function flipCard() {
	const cardId = this.getAttribute("data-id"); //prendi l'attributo di questo
	cardChosen.push(cardArray[cardId].name); //pusha dentro cardChosen il nome della carta cliccata, gli passiamo l'id per capire qual è esattamente
	this.setAttribute("src", cardArray[cardId].img);
	if (cardChosen.length === 2) {
		setTimeout(checkMatch, 500); //è come Invoke in C#
	}
}
