function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(n) {
  if (n === 1) {
    return 2;
  }
  let count = 1;
  let candidate = 3;
  while (count < n) {
    if (isPrime(candidate)) {
      count++;
    }
    candidate += 2;
  }
  return candidate - 2;
}

nthPrime(10001);