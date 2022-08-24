function bracketParser(string) {
  let bracketStack = [];

  const characters = string.split('');
  const openingToClosing = {
    '[' : ']',
    '(' : ')',
    '{' : '}',
  };

  for(const char of characters) {
    const isOpening = /[[{(]/gm.test(char);
    const isClosing = /[\]})]/gm.test(char);

    if(isOpening){
      bracketStack.push(openingToClosing[char]);
      continue;
    }
    if(isClosing){
      if(char === bracketStack[bracketStack.length]){
        bracketStack.pop();
        continue;
      }
      return false;
    }
  }
  return true;
}

module.exports = {
  bracketParser,
};
