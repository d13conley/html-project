/*Here are the guidelines:

The user should be able to insert or enter text into a text area
The user should be able to click a button that reports on statistics about the text
- Total number of words
- Total number of sentences
- Average words per sentence
- Total number of spaces

Your HTML will need to have elements to store your resulting statistics
Remember your Document Object Model lessons to get access to those elements
You will need to make use of loops, functions, if statements and variables.
You are NOT allowed to use the JavaScript .split() function
 */

function countWords() {
	
	// This variable contains the text the user inputs into the textarea box
	var str1 = document.getElementById("userInput").value;
	

	// Variables that will store the information we want to calculate from the user's input
	var totalWords = 1; 
	var totalSentences = 0;
	var avgWords = 0;
	var numSpaces = 0;

	for (var i = 0; i <= str1.length; i++) {
		if (str1[i] == " ") {
			totalWords++;                 // If the function encounters a space, the index will add a word, as well as a space
			numSpaces++;

		}

		if (str1[i] == "." || str1[i] == "?" || str1[i] == "!" ) {
			totalSentences++;                                               // If the function encounters any punctuation inclulding '.', '?', or '!' the index will add a sentence
		} 
	}

	avgWords = totalWords / totalSentences;                     // The function will average the number of words by dividing the total number of words by the total number of sentences
	
	
	
	// This will show the output of the information calculated by our function
	document.getElementById("row1").innerHTML = ('The total number of words is' + ' ' + totalWords + '. <br>');
	document.getElementById("row2").innerHTML = ('The total number of sentences is' + ' ' + totalSentences + '. <br>');
	document.getElementById("row3").innerHTML = ('The average number of words is' + ' ' + avgWords + '. <br>');
	document.getElementById("row4").innerHTML = ('The total number of spaces is' + ' ' + numSpaces + '.');
	
	
}

