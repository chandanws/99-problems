function sumMultiplesOfThreeand5() {
  let result = 0;
  for(let i = 0; i < 10; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i
    };
  };
  return result;
};

module.exports = sumMultiplesOfThreeand5;