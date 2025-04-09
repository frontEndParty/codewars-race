def disemvowel(string_):
    vowels = ['a', 'e', 'i', 'o','u']
    
    return "".join([i for i in string_ if not i in vowels and not i.lower() in vowels])