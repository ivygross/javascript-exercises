// const removeFromArray = function (array, ...removals) {
//   let results = [];
//   let excluded = [...removals];
//   array.forEach((element) => {
//     if (!excluded.includes(element)) {
//       results.push(element);
//     }
//   });
//   return results;
// };

const removeFromArray = (array, ...removals) => {
  return array.filter((element) => !removals.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
