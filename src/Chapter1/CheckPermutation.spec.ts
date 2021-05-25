// O(a log a + b log b) time, O(a + b) space
function isPermutation(a: string[], b: string[]): boolean {
	if (a.length != b.length) return false;

	a.sort();
	b.sort();

	for (const i in a) {
		if (a[i] != b[i]) return false;
	}

	return true;
}

test('string not the same length returns falls', () => {
	expect(isPermutation('abc'.split(''), 'ab'.split(''))).toBe(false);
});

test('string a is not a permutation of string b returns false', () => {
	expect(isPermutation('abc'.split(''), 'abd'.split(''))).toBe(false);
});

test('string a is permutation of string b return true', () => {
	expect(isPermutation('abcd'.split(''), 'dcba'.split(''))).toBe(true);
});
