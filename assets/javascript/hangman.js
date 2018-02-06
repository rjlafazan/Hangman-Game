

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

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wordRandom = wordArray[Math.floor(Math.random() * wordArray.length)];

var varvarBinks;
var guesses = 0;
var wins = 0;
var losses = 0;
// var maxGuess = 

var usedLetters = [];

var answerArray = [];

 // begins function and generates random word with underscores 
function begin() {
	for (var i = 0; i < wordRandom.length; i++) {
		answerArray[i] = "_";
	}

	varvarBinks = answerArray.join(" ");
	document.getElementById("answer").innerHTML = varvarBinks


}

// function for making guesses and placing correct/incorrect letters into the html
function Letter(letter) {
	// var letter = document.getElementById("letter").value;


	if (letter.length > 0) {
		for (var i = 0; i < wordRandom.length; i++) {
			if (wordRandom[i] === letter) {
				answerArray[i] = letter;
			}
		}
	
		guesses++;
		document.getElementById("guesses").innerHTML = " " +guesses;
		document.getElementById("answer").innerHTML = answerArray.join(" ");
	}
	if (guesses > 7) {
		losses++;
		document.getElementById("losses").innerHTML = losses;
		alert("YOU LOSE!");
	}

	// letter.forEach(val => {
	// 	console,log(val);
	// 	usedLetters.push(event.key);
	// 	document.getElementById('usedLetters').innerHTML = usedLetters;
	// })

}

	
document.onkeyup = function(event) {
	console.log(event.key);
	Letter(event.key);

	if (alphabet.indexOf(event.key) > -1) {
		usedLetters.push(event.key);
		console.log(event.key);
		document.getElementById('usedLetters').innerHTML = usedLetters;
	}
}

document.querySelector('#startbutt').addEventListener('click', begin) 







