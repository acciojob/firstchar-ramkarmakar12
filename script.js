function firstChar(str) {
  // Iterate through the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is not a space
    if (str[i] !== ' ') {
      return str[i];
    }
  }
  // If no non-space character is found, return an empty string
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
