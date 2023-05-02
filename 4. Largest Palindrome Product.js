function largestPalindromeProduct(n) {
    let max = Math.pow(10, n) - 1;
    let min = Math.pow(10, n - 1);
    let largestPalindrome = 0;
  
    for (let i = max; i >= min; i--) {
      for (let j = max; j >= min; j--) {
        let product = i * j;
        if (isPalindrome(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    return largestPalindrome;
  }
  
  function isPalindrome(number) {
    let str = number.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  