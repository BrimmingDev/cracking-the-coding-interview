import unittest

# O(n^2) time, O(1) space
# def IsUnique(s):
#     if len(s) > 128:
#         return False

#     for i in range(0, len(s)):
#         for j in range(i +1, len(s)):
#             if s[i] == s[j]:
#                 return False


#     return True

# O(n) time, O(n) space
def IsUnique(s):
    if len(s) > 128:
        return False

    chars = {}

    for char in s:
        if char in chars:
            return False
        else:
            chars[char] = True

    print(chars)

    return True

    

class TestStringMethods(unittest.TestCase):
    def test_stringHasTomanyChars(self):
        longStr = 'kccNOaMSbLCsknGX3NzS671eGi5vMLucAEVtHMDb3n0PrUZ1hGpVBJ7noxabwA5zfkPj6MBBLmtiNPTPNi76CPPknyuDfp8BxRrvRUpK1CwuYmsH5715WcCbyedebRMXR'

        self.assertEqual(IsUnique(longStr), False)

    def test_stringIsNotUnique(self):
        self.assertEqual(IsUnique('abcdefaghijk'), False)

    def test_stringIsUnique(self):
        self.assertEqual(IsUnique('abcdefg'), True)