function solution(number){
    if (number < 0) return 0
    return [...Array(number).keys()]
      .map((_,i)=> i)
      .filter((num) => num % 3 === 0 || num % 5 === 0)
      .reduce((total, curr) => total + curr, 0)
  }