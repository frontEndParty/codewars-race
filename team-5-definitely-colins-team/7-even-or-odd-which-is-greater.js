function evenOrOdd(str) {
  let evens = 0
  let odds = 0
  for (const digit of str) {
    digit % 2 === 0 ? evens += +digit : odds += +digit 
  }
  if (odds > evens) return "Odd is greater than Even" 
  else if (evens > odds) return "Even is greater than Odd"
  else return "Even and Odd are the same"
}
