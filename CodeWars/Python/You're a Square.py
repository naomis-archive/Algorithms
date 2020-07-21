# determine if n is square number
import math
def is_square(n):
    if n < 0: 
        return False
    return math.sqrt(n) == int(math.sqrt(n))