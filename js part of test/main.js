function removeSpaces(str) {
	return str.replace(/\s/g, '');
}

function findUnique(arr) {
	var temp = [];
	var compareElem;
	for (let i = 0; i < arr.length; i++) {
		temp[i] = [].slice.call(removeSpaces(arr[i])).sort().join('');
	}
	compareElem = temp[0];
	for (let j = 0; j < temp.length; j++) {
		if (compareElem !== temp[j]) {
			if (j === temp.length - 1) {
				return arr[j];
			}
			if (compareElem !== temp[j + 1] && compareElem !== temp[j + 2]) {
				return arr[0];
			}
			return arr[j];
		}
	}
	return;
}

console.log(findUnique(['test', ' abc', 'acb  ', 'bac', 'bca', 'cab', 'cba']));
console.log(findUnique([' abc', 'acb  ', 'bac', 'test', 'bca', 'cab', 'cba']));
console.log(findUnique(['test', '   abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
console.log(findUnique(['abc', 'acb', 'bac', 'bca', 'cab', 'cba', 'test']));