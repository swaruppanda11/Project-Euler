function smallestMult(n) {
    // Start with n
    let currentNumber = n;
  
    // Loop through numbers from n-1 down to 1
    for (let i = n - 1; i >= 1; i--) {
      // If current number is divisible by i, continue
      if (currentNumber % i === 0) {
        continue;
      }
      // Otherwise, multiply current number by i divided by gcd(current number, i)
      let gcd = findGCD(currentNumber, i);
      currentNumber *= i / gcd;
    }
  
    return currentNumber;
  }
  
  // Find the greatest common divisor of two numbers using Euclid's algorithm
  function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }
  