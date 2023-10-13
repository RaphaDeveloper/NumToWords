// Given a non-negative integer, output the string of words we would speak when we read it.
// ex: 123 -> "one hundred twenty three"
// range: 0-2**32 (~4.3B)

const numToWords = (num) => {
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
  
    let result = '';
  
    const numAsString = num.toString();
  
    let iterations = Math.ceil(numAsString.length / 3);
  
    for (let i = 0; i < iterations; i++) {
      let lastIterationIndex = (numAsString.length - 1) - (3 * i);
  
      let lastDigit = numAsString[lastIterationIndex];
      let middleDigit = numAsString[lastIterationIndex - 1];
      let firstDigit = numAsString[lastIterationIndex - 2];
  
      let iterationResult = units[lastDigit];
  
      if (middleDigit && middleDigit != '0') {
        iterationResult = dozens[middleDigit + lastDigit] || `${dozens[middleDigit]} ${units[lastDigit]}`;
      }
  
      if (firstDigit && firstDigit != '0') {
        iterationResult = `${units[firstDigit]} Hundred ${iterationResult}`.trim();
      }
  
      result = `${iterationResult} ${suffixes[i]} ${result}`;
    }
  
    return result.trim() || 'Zero';
  };
  
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