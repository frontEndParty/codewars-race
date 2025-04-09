def even_or_odd(s):
    evens = 0
    odds = 0
    for digit in s: 
        d = int(digit)
        if d % 2 == 0: evens += d
        else: odds += d

    if odds > evens: return "Odd is greater than Even" 
    elif evens > odds: return "Even is greater than Odd"
    else: return "Even and Odd are the same"
