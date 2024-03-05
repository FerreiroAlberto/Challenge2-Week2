export const longitud = (str) => {
  if (!str) {
    return 0;
  }

  let counter = 1;
  // eslint-disable-next-line for-direction
  for (let i = 1; i > 0; i++) {
    if (!str[i]) {
      break;
    }

    counter += 1;
  }

  return counter;
};

export const substring = (str, start, end) => {
  let newString = '';
  const strElements = longitud(str);
  for (let i = start; i < end && i < strElements; i++) {
    newString += str[i];
  }

  return newString;
};

export const trim = (string) => {
  const stringlength = longitud(string);
  let trim = '';
  for (let i = 0; i < stringlength; i++) {
    if (string[i] !== ' ') {
      trim += string[i];
    }
  }

  return trim;
};

export const trimEnd = (string) => {
  const largo = longitud(string);
  let lastChar = 0;

  for (let i = largo - 1; i >= 0 && string[i] === ' '; i--) {
    lastChar += 1;
  }

  const stringEnd = largo - lastChar;

  return substring(string, 0, stringEnd);
};

export const trimStart = (string) => {
  const largo = longitud(string);
  let firstChar = 0;

  for (let i = 0; i < largo && string[i] === ' '; i++) {
    firstChar += 1;
  }

  return substring(string, firstChar, largo - 1);
};

console.log(trimStart('    cro  que   ta  '));
