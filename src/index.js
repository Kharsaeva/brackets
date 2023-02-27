module.exports = function check(str, bracketsConfig) {
  const openBracket = ["(", "{", "[", "|", "1", "3", "5", "7", "8"];
  const bracketPair = {
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
    ["|"]: "|",
    ["2"]: "1",
    ["4"]: "3",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };
  let stack = [];
  let nextElement;

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (topElement === "|" || topElement === "7" || topElement === "8") {
      nextElement = topElement;
    } else {
      nextElement = undefined;
    }

    if (openBracket.includes(currentSymbol) && currentSymbol !== nextElement) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracketPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
