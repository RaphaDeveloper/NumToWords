// Given a non-negative integer, output the string of words we would speak when we read it.
// ex: 123 -> "one hundred twenty three"
// range: 0-2**32 (~4.3B)

const units = {
    '0': '',
    '1': "One",
    '2': "Two",
    '3': "Three",
    '4': "Four",
    '5': "Five",
    '6': "Six",
    '7': "Seven",
    '8': "Eight",
    '9': "Nine",
  };
  
  const dozens = {
    '10': "Ten",
    '11': "Eleven",
    '12': "Tweve",
    '13': "Thirteen",
    '14': "Fourteen",
    '15': "Fifteen",
    '16': "Sixteen",
    '17': "Seventeen",
    '18': "Eighteen",
    '19': "Nineteen",
    '2': "Twenty",
    '3': "Thirty",
    '4': "Forty",
    '5': "Fifty",
    '6': "Sixty",
    '7': "Seventy",
    '8': "Eighty",
    '9': "Ninety",
  };
  
  let suffixes = {
    0: '',
    1: 'Thousand',
    2: 'Million',
    3: 'Billion'
  }
  
  const numToWords = (num) => {
    if (num == 0)
        return 'Zero'
    
    let words = [];
  
    const numAsString = num.toString();
  
    for (let i = numAsString.length - 1, iteration = 0; i >= 0; i -= 3, iteration++) {
      let unitsDigit = numAsString[i];
      let dozensDigit = numAsString[i - 1];
      let hundredsDigit = numAsString[i - 2];
  
      let unitWord = getUnitsWord(unitsDigit);
      let dozensWord = getDozensWord(dozensDigit, unitsDigit);
      let hundredsWord = getHundredsWord(hundredsDigit);
  
      let suffix = suffixes[iteration];
  
      let word = concatenateWords(hundredsWord, dozensWord, unitWord, suffix);
  
      insertWordAtFirstPositionOfWords(word, words);
    }
  
    return words.join(' ');
  };
  
  function getUnitsWord(unitsDigit) {
    return unitsDigit != '0' ? units[unitsDigit] : '';
  }
  
  function getDozensWord(dozensDigit, unitsDigit) {
    let dozensWord = '';
  
    if (dozensDigit && dozensDigit != '0') {
      dozensWord = dozens[dozensDigit + unitsDigit] || `${dozens[dozensDigit]} ${units[unitsDigit]}`;
    }
  
    return dozensWord;
  }
  
  function getHundredsWord(hundredsDigit) {
    let hundredsWord = '';
  
    if (hundredsDigit && hundredsDigit != '0') {
      hundredsWord = `${units[hundredsDigit]} Hundred`;
    }
  
    return hundredsWord;
  }
  
  function concatenateWords(hundredsWord, dozensWord, unitWord, suffix) {
    let words = [];
  
    if (hundredsWord)
      words.push(hundredsWord);
  
    if (dozensWord)
      words.push(dozensWord);
    else if (unitWord)
      words.push(unitWord);
  
    if (suffix)
      words.push(suffix);
  
    return words.join(' ');
  }
  
  function insertWordAtFirstPositionOfWords(word, words) {
    words.splice(0, 0, word);
  }
  
  console.log(numToWords(0)); // Zero
  console.log(numToWords(6)); // six
  console.log(numToWords(34)); // thirty four
  console.log(numToWords(17)); // seventeen
  console.log(numToWords(60)); // sixty
  console.log(numToWords(650)); // Six Hundred Fifty
  console.log(numToWords(655)); // Six Hundred Fifty Five
  console.log(numToWords(1655)); // One Thousand Six Hundred Fifty Five
  console.log(numToWords(1615)); // One Thousand Six Hundred Fifteen
  console.log(numToWords(1615547)); // One Million Six Hundred Fifteen Thousand Five Hundred Forty Seven
  console.log(numToWords(11615547)); // Eleven Million Six Hundred Fifteen Thousand Five Hundred Forty Seven
  console.log(numToWords(211615547)); // Two Hundred Eleven Million Six Hundred Fifteen Thousand Five Hundred Forty Seven
  console.log(numToWords(4211615547)); // Four Billion Two Hundred Eleven Million Six Hundred Fifteen Thousand Five Hundred Forty Seven
  console.log(numToWords(100005));