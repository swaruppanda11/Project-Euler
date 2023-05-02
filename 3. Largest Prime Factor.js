function largestPrimeFactor(number) {
    let factor = 2;
    let maxFactor = 1;
  
    while (number > 1) {
      if (number % factor === 0) {
        maxFactor = factor;
        number = number / factor;
        while (number % factor === 0) {
          number = number / factor;
        }
      }
      factor++;
    }
  
    return maxFactor;
  }
  