// const sumAll = function (num1, num2) {
//   // negative and non-number parameters
//   if (
//     typeof num1 !== "number" ||
//     num1 < 0 ||
//     typeof num2 !== "number" ||
//     num2 < 0
//   )
//     return "ERROR";
//   // assign max and min for numbers
//   let min = Math.min(num1, num2);
//   let max = Math.max(num1, num2);
//   let sum = 0;
//   // BETWEEN AND INCLUDING
//   // loop, for loop
//   for (let i = min; i <= max; i++) {
//     // increment sum by i
//     sum += i;
//   }
//   // return sum
//   return sum;
// };

const sumAll = (min, max) => {
  if (min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number")
    return "ERROR";
  if (min > max) [min, max] = [max, min];
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
