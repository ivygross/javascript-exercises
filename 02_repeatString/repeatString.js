const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  // if (times === 0) return "";

  // let result = [];
  let result = "";
  let i = 0;
  while (i < times) {
    // result.push(word);
    result += word;
    i++;
  }
  // return result.join('');
  return result;
};

// Do not edit below this line
module.exports = repeatString;
