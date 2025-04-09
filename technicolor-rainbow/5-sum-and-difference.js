// The number 45 is the first integer in having this interesting
// property: the sum of the number with its reversed is divisible by
// the difference between them(absolute Value).

// 45 + 54 = 99 
// abs(45 - 54) = 9
// 99 is divisible by 9.
// The first terms of this special sequence are :

// n a(n) 1 45 2 54 3 495 4 594 Make the function that receives n, the
// ordinal number of the term and may give us, the value of the term
// of the sequence. Let's see some cases (input ----> output):

const remembered = [];
const criterion = (n) => {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    const sum = n + reversed;
    const diff = Math.abs(n - reversed);
    if(diff == 0) {return false;}
    if(n % 10 == 0) {return false;}
    return (sum / diff) == Math.floor(sum / diff);
}


const solution = (n) => {
    let count = remembered.length;
    let memval = remembered[count - 1];
    if(n <= count) return memval;
    let result = memval || 0;
    while(count < n) {
	result++;
	if(criterion(result)) {
	    remembered[count] = result;
	    count++;
	}
    }
    return result;
}
