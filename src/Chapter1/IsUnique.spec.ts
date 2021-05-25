// O(n^2), O(1) space
// function isUnique(s: string): boolean {
//   if (s.length > 128) return false;

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] == s[j]) return false;
//     }
//   }

//   return true;
// }

// O(n) time, O(n) space
function isUnique(s): boolean {
	if (s.length > 128) return false;

	const chars = new Set();

	for (const char of s) {
		if (chars.has(char)) {
			return false;
		} else {
			chars.add(char)
		}
	}

	return true;
}

test('string greater than 128 chars returns false', () => {
	const longStr =
		'kccNOaMSbLCsknGX3NzS671eGi5vMLucAEVtHMDb3n0PrUZ1hGpVBJ7noxabwA5zfkPj6MBBLmtiNPTPNi76CPPknyuDfp8BxRrvRUpK1CwuYmsH5715WcCbyedebRMXR';
	expect(isUnique(longStr)).toBe(false);
});

test('non unique string returns false', () => {
	expect(isUnique('abcdefaghijk')).toBe(false);
});

test('unique string returns true', () => {
	expect(isUnique('abcdefg')).toBe(true);
});
