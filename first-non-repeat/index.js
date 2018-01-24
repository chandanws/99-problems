function firstNonRepeat(word) {
  if (typeof word !== 'string'){
    throw new TypeError('Must pass in a string');
  }
  let track = [];

  for (let i = 0; i < word.length; i += 1) {
    const bucket = {
      char: word[i],
      count: 1
    }
    if (lookup(word[i])){
      updateCount(word[i])
    } else {
      insert(bucket);
    }
  }

  function insert(bucket) {
    track.push(bucket);
  }

  function lookup(char) {
    if (track.length === 0) return false;
    
    for (let i = 0; i < track.length; i += 1) {
      if (track[i].char === char) {
        return track[i];
      }
    }
    return false;
  }

  function updateCount(char) {
    const bucket = lookup(char);
    bucket.count += 1;
  }
  
  return (function(){
    for (let i = 0; i < track.length; i += 1) {
      if (track[i].count === 1) {
        return track[i].char;
      }
    }
  })();
}
module.exports = firstNonRepeat;