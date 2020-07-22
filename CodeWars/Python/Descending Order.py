# sort digits in a number from largest to smallest
def descending_order(num):
    return int("".join(sorted(str(num), reverse=True)))
