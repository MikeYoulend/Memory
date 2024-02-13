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

function createBoard() {
	for (let i = 0; i < 10; i++) {
		//parti da 0 e finchè i è minore di 10 incrementa di 1
		const card = document.createElement("img"); //creiamo un elemento img
		card.setAttribute("src", "images/blank.png"); //a src gli diamo images...
		card.setAttribute("data-id", i); //a data-id gli diamo i che andra da a 1 a 10
		gridDisplay.append(card);
	}
}

createBoard();
