function firstChar(str) {
  // Trim leading and trailing spaces for simplicity
  const trimmedStr = str.trim();

  // Return the first character if available, otherwise an empty string
  return trimmedStr.length > 0 ? trimmedStr[0] : '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
