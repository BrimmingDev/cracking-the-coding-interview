// O(n) time, O(1) space
function urlify(url: string[]): string {
	let leftIdx = url.length - 1;
	while (url[leftIdx] == ' ') {
		leftIdx--;
	}

	let rightIdx = url.length - 1;
	while (rightIdx >= 0) {
		if (url[leftIdx] == ' ') {
			url[rightIdx] = '0';
			url[rightIdx - 1] = '2';
			url[rightIdx - 2] = '%';
			rightIdx -= 2;
		} else {
			url[rightIdx] = url[leftIdx];
		}
		leftIdx--;
		rightIdx--;
	}

	return url.join('');
}

test('given string url with spaces it should return string with %20 in spaces', () => {
	expect(urlify('Mr John Smith    '.split(''))).toBe('Mr%20John%20Smith');
});
