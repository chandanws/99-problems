function repeatingLetters2(string){
  const obj = {};
  const resultArr = [];

  for(x = 0; x < string.length; x++) {
    var l = str.charAt(x);
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);

    // === Non ternary ==
    // if (isNaN(obj[l])) obj[l] = 1
    // else obj[l] += 1
  }

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] > 1) {
      repeats.push(new Array( obj[key]+ 1 ).join( key ));
    }
  }
}

// returns arr of repeating characters ex. ['aaa', 'nn']

repeatingLetters2('banana');
