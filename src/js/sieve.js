export default function(n) {
  const primes = Array(n + 1)
    .fill(true);

  primes[0] = false;
  primes[1] = false;

  function square(i) {
    return i * i;
  }

  for (let number = 2; square(number) <= n; number += 1) {
    if (!primes[number]) {
      continue;
    }

    for (let multiplier = 2; multiplier * number <= n; multiplier += 1) {
      primes[multiplier * number] = false;
    }
  }

  return primes
    .map((e, i) => (e) ? i : e)
    .filter(e => e);
};