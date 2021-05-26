// add count for each character in test string
// decrement for comparison string
// if any value goes to less than zero then it's not a permutation
// O(n) time, O(n) space
function checkPalidromePermutation(s: string[], p: string[]) {
	const chars = new Map();

	for (const c of s) {
        const lowerChar = c.toLowerCase();
		if (!chars.has(lowerChar)) {
			chars.set(lowerChar, 1);
		} else {
			chars.set(lowerChar, chars.get(lowerChar) + 1);
		}
	}

	for (const c of p) {
        const lowerChar = c.toLowerCase();

		if (!chars.has(lowerChar)) {
			chars.set(lowerChar, -1);
		} else chars.set(lowerChar, chars.get(lowerChar) - 1);

		if (chars.get(lowerChar) < 0) return false;
	}

	return true;
}

const testString = 'Tact Coa';

test('Given valid input check palidrome permutation should return true', () => {
	expect(
		checkPalidromePermutation(testString.split(''), 'taco cat'.split(''))
	).toBe(true);
});

test('Given valid input check palidrome permutation should return true', () => {
	expect(
		checkPalidromePermutation(testString.split(''), 'taco bat'.split(''))
	).toBe(false);
});
