function evenFibonacci(limit) {
  let a = 1;
  let b = 1;
  let temp = null
  let result = 0;
  while(result <= limit){
    if (a % 2 === 0) {
     result += a;
    }
    temp = a;
    a = a + b;
    b = temp;
  };

  return result;
};

module.exports = evenFibonacci;