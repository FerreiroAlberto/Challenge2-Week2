const longitud = (str) => {
  if (!str) {
    return 0;
  }
  let counter = 1;
  for (let i = 1; i > 0; i++) {
    if (!str[i]) {
      break;
    }
    counter += 1;
  }
  return counter;
};

console.log(longitud("isdi"));

const substring = (str, start, end) => {
  let newString = "";
  let strElements = longitud(str);
  for (let i = start; i < end && i < strElements; i++) {
    newString += str[i];
  }
  return newString;
};

substring("bootcamp", 3, 9);
