// https://www.codewars.com/kata/5277c8a221e209d3f6000b56
const validBraces = braces => {
  let valid = true;
  const stack = [],
        relation = {
          '(':')',
          '[':']',
          '{':'}'
        };

  for (let i = 0; i < braces.length; i++) {
    const brace = braces[i];
    if (brace in relation) {
      stack.push(brace);
    } else if(brace === relation[stack.slice(-1)]) {
      stack.pop();
    } else {
      valid = false;
      break;
    }
  }

  return valid && !stack.length;
}

export default validBraces;
