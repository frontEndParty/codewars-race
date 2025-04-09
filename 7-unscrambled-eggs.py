import re

def unscramble_eggs(word):
  return re.sub(r"egg", "", word)
