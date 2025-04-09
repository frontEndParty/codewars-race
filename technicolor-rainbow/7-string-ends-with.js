const solution = (str, ending) => {
    const lenStr = str.length;
    const lenEnding = ending.length;
    if(lenEnding > lenStr) {
	return false;
    }
    return str.substr(lenStr - lenEnding, lenStr) == ending;
}
