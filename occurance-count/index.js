function occuranceCount(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === char) {
      count += 1;
    }
  }

  return count;
}

module.exports = occuranceCount;