var wordArray = [
	"muaythai", 
	"judo", 
	"jiujitsu", 
	"karate", 
	"kravmaga", 
	"kungfu",
	"aikido",
	"jeetkunedo"
];

// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wordRandom = wordArray[Math.floor(Math.random() * wordArray.length)];

var varvarBinks;
var guesses = 0;
var wins = 0;
var losses = 0;
// var maxGuess = 

var usedLetters = [];

var answerArray = [];

function begin() {
	for (var i = 0; i < wordRandom.length; i++) {
		answerArray[i] = "_";
	}

	varvarBinks = answerArray.join(" ");
	document.getElementById("answer").innerHTML = varvarBinks

	// document.onkeyup = function(event) {
	// 	var userGuess = event.key;
	// 	var letter = document.getElementById("letter").value;
	// 	document.querySelector("letter").innerHTML = usedLetters;

	// 	if (userGuess === wordRandom.charAt()) {

	// 	} else if (userGuess !== wordRandom.charAt()) {
			
	// 	}

	// 	if (letter.length > 0) {
	// 		for (var i = 0; i < wordRandom.length; i++) {
	// 			if (wordRandom[i] === letter) {
	// 				answerArray[i] = letter;
	// 			}
	// 		}
		
	// 	guesses++;
	// 	document.getElementById("guesses").innerHTML = "Guess # " + guesses;
	// 	document.getElementById("answer").innerHTML = answerArray.join(" ");
	// 	}
	// 	if (guesses > 7) {
	// 		losses++;
	// 		document.getElementById("losses").innerHTML = "Loss # " + losses;
	// 		alert("YOU LOSE!");
	// 	}
	// }
}

function Letter() {
	var letter = document.getElementById("letter").value;

	if (letter.length > 0) {
		for (var i = 0; i < wordRandom.length; i++) {
			if (wordRandom[i] === letter) {
				answerArray[i] = letter;
			}
		}
	
	guesses++;
	document.getElementById("guesses").innerHTML = "Guess # " + guesses;
	document.getElementById("answer").innerHTML = answerArray.join(" ");
	}
	if (guesses > 7) {
		losses++;
		document.getElementById("losses").innerHTML = "Loss # " + losses;
		alert("YOU LOSE!");
	}
}








