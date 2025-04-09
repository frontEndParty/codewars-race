function collatz(n) {
  let value = n;
  let sequence = `${n}`;
  while (value > 1) {
    value = value % 2 ? value * 3 + 1 : value / 2;
    sequence += `->${value}`;
  }
  return sequence;
}
