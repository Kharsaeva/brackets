module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = bracketsConfig.map(pair => pair[0]);
  const closingBrackets = bracketsConfig.map(pair => pair[1]);
  
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    
    if (openingBrackets.includes(currentChar)) {
      // Push opening brackets to stack
      stack.push(currentChar);
    } else if (closingBrackets.includes(currentChar)) {
      // Check if closing bracket matches the last opening bracket in the stack
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)];
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    } else {
      // Ignore non-bracket characters
      continue;
    }
  }
  
  // If there are still opening brackets in the stack, the string is unbalanced
  return stack.length === 0;
}
