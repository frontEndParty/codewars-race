snail = function (array) {
  //console.log(array)
  let solution = [];

  // row 1
  // take last number in each column
  // take bottom row (backwards)
  // take first number in each column (reverse)

  while (array.length > 0) {
    console.log(array);
    solution.push.apply(solution, array.shift());
    if (array.length > 0) {
      for (i of array) {
        solution.push(i.pop());
      }
    }
    if (array.length > 0) {
      const lastLine = array.pop();
      solution.push.apply(solution, lastLine.reverse());
    }
    if (array.length > 0) {
      const reversed = array.slice().reverse();
      for (i of reversed) {
        solution.push(i.shift());
      }
    }
  }

  return solution;
};
