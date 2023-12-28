const leapYears = function (year) {
  // leap year if divisible by 4
  // not leap year if divisible by 100 UNLESS also divisible by 400

  // if not divisible by 4 return false
  if (year % 4 !== 0) return false;
  // if divisble by 100 but not divisible by 400 return false
  if (year % 100 === 0 && year % 400 !== 0) return false;
  // return true;
  return true;
};

// const leapYears = (year) => {
//   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// }

// Do not edit below this line
module.exports = leapYears;
