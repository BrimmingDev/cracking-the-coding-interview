import unittest

# O(a log a + b log b) time, O(a + b) space
def IsPermutation(a, b):
    if len(a) != len(b):
        return False

    sortedA = sorted(a)
    sortedB = sorted(b)

    for idx in range(0, len(sortedA)):
        if sortedA[idx] != sortedB[idx]:
            return False

    return True

class TestPermutations(unittest.TestCase):
    def test_stringsAreNotSameLength(self):
        self.assertEqual(IsPermutation('abc', 'abcd'), False)

    def test_stringIsNotPermutation(self):
        self.assertEqual(IsPermutation('abcd', 'abce'), False)

    def test_stringIsUnique(self):
        self.assertEqual(IsPermutation('abcd', 'dcba'), True)