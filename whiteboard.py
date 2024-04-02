# Pair of gloves
# Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

# Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

# Examples:
# input = ["red", "green", "red", "blue", "blue"]
# result = 2 (1 red pair + 1 blue pair)

# input = ["red", "red", "red", "red", "red", "red"]
# result = 3 (3 red pairs)

# input - array of colors #output - how many pairs you can make with each color
# go through list, create a dictioary
# if we have not seen the color before, add it to the dict with count of 1
# if we have seen it, add 1
# go through values // by 2 

def solution(arr):
    gloves = {}
    glove_count = 0
    for color in arr:
        if color not in gloves:
            gloves[color] = 1
        else:
            gloves[color] += 1
    for val in gloves.values():
        x = val // 2
        glove_count += x
    return glove_count
