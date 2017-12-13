
/*
;(function(){
	var wordcounter = document.getElementById('wordcounter')
	var counteroutput = document.getElementById('counteroutput')
	var counteroutputFoot = document.getElementById('counteroutput-foot')
	var words, chars

	function countemwords(){
		words = (wordcounter.value == '')? 0 : wordcounter.value.split(' ').length
		chars = wordcounter.value.length
		counteroutput.innerHTML = 'Words: <span class="outputval">' + words + '</span> Chars: <span class="outputval">' + chars + '</span>'
		counteroutputFoot.innerHTML = '<b>Words: </b>' + words + '<b>Chars: </b>' + chars
	}

	wordcounter.addEventListener('input', function(e){
		countemwords()
	}, false)


  document.addEventListener("DOMContentLoaded", function(event) {
		countemwords()
  }, false)

  window.addEventListener("load", function(event) {
		countemwords()
  }, false)
	
})()

*/



function countIt() {
	var formContent = document.wordcount.wordcount2.value;
	formContent = formContent.split(" ");
	document.wordcount.wordcount3.value = formContent.length;
}

