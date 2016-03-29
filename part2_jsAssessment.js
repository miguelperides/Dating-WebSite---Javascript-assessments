var colors=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse"];
var target;
var guess_input;
var guess_input_text;
var finished;
var guesses = 0;

function do_game(){
	var random_color = Math.random() * colors.length;
	var random_color_integer = Math.floor(random_color);
	target = colors[random_color_integer];

	while(!finished) {
	guess_input_text = prompt ("I am thinking of one of these colors: \n\n" + colors.join(', ') + "\n\nWhat color am i thinking of? ");
	guesses+=1;
	finished = check_guess();
	}
}

function check_guess() {
	if (colors.indexOf(guess_input_text) < 0) {
		alert("Sorry, I don't recognize you color.\n\nPlease try again.")
	return false;
	}

	if (guess_input_text > target) {
	alert("Sorry, your guess is not correct!\n\nHint: your color is alphabetically higher than mine.\n\nPlease try again.")
	return false;
	}
	if (guess_input_text < target) {
	alert("Sorry, your guess is not correct!\n\nHint: your color is alphabetically lower than mine.\n\nPlease try again.")
	return false;
	}
	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background=target;
	alert("Congratulation! You have guessed the color!\n\nIt took you "+ guesses + " guesses to finish the game!\n\nYou can see the colour in the background.");
	return true;

}

