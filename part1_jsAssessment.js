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

	while(guess_input_text != target) {
	guess_input_text = prompt ("I am thinking of one of these colors: \n\n" + colors.join(', ') + "\n\nWhat color am i thinking of? ");
	guesses+=1;
	}
}



