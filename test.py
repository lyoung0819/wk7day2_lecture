import unittest

from whiteboard import solution

class GlovePairsTestCase(unittest.TestCase):
    def test_example_one(self):
        input_gloves = ["red", "green", "red", "blue", "blue"]
        assert solution(input_gloves) == 2

    def test_example_two(self):
        input_gloves = ["red", "red", "red", "red", "red", "red"]
        assert solution(input_gloves) == 3

    def test_empty_input(self):
        input_gloves = []
        assert solution(input_gloves) == 0

    def test_single_color(self):
        input_gloves = ["blue", "blue", "blue"]
        assert solution(input_gloves) == 1

if __name__ == '__main__':
    unittest.main()