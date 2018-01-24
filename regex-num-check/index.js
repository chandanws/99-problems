function regexNum(str) {
  return /^\d+$/g.test(str);
}

module.exports = regexNum;