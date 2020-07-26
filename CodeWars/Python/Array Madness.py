# return true if sum of squares of a is greater than sum of cubes of b
def array_madness(a, b):
    squares = 0
    cubes = 0
    for element in a:
        squares += element**2
    for element in b:
        cubes += element**3
    return squares > cubes
