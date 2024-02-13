document.addEventListener("DOMContentLoaded", () => {
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
	const resultDisplay = document.querySelector("#result");

	let cardChosen = []; //qui andranno le carte scelte, il nome
	let cardsChosenIds = []; //qui andra l'id delle carte scelte
	const cardsWon = []; //qui andranno le carte con lo stesso nome

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

	function flipCard() {
		const cardId = this.getAttribute("data-id"); //prendi l'attributo di questo
		cardChosen.push(cardArray[cardId].name); //pusha dentro cardChosen il nome della carta cliccata, gli passiamo l'id per capire qual è esattamente
		cardsChosenIds.push(cardId);
		this.setAttribute("src", cardArray[cardId].img);
		if (cardChosen.length === 2) {
			setTimeout(checkMatch, 500); //è come Invoke in C#
		}
	}

	function checkMatch() {
		const cards = document.querySelectorAll("img");
		const optioneOneId = cardsChosenIds[0];
		const optioneTwoId = cardsChosenIds[1];

		if (optioneOneId == optioneTwoId) {
			//se l'id della carta è uguale allora...
			alert("You have clicked the same image!");
			cards[optioneOneId].setAttribute("src", "images/blank.png");
			cards[optioneTwoId].setAttribute("src", "images/blank.png");
		} else if (cardChosen[0] == cardChosen[1]) {
			//senò vedi se il nome della carta è uguale alla seconda
			alert("you found a match");
			cards[optioneOneId].setAttribute("src", "images/white.png");
			cards[optioneTwoId].setAttribute("src", "images/white.png");
			cards[optioneOneId].removeEventListener("click", flipCard);
			cards[optioneTwoId].removeEventListener("click", flipCard);
			cardsWon.push(cardChosen); //se è uguale push nelle carte scelte
		} else {
			//senò hai sbagliato e riprova
			cards[optioneOneId].setAttribute("src", "images/blank.png");
			cards[optioneTwoId].setAttribute("src", "images/blank.png");
			alert("Sorry Try Again");
		}

		cardChosen = []; //in qualsiasi caso svuota cardChosen
		cardsChosenIds = []; //in qualsiasi caso svuota anche CardChosenIds
		resultDisplay.textContent = cardsWon.length; //il contenuto dello span con result avrà la lunghezza dell'array delle carte corrette
		if (cardsWon.length == cardArray.length / 2) {
			//se la lunghezza di cardswon è uguale alle carte in totale diviso 2
			resultDisplay.textContent = "Congratulations you found them all!"; //hai vinto
		}
	}
});
