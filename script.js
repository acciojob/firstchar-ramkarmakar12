function firstChar(text) {
  // your code here
	text=text.trim();

	  if (str === '') {
    return '';
  }
	let first = text.charAt(0);
	return first;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
