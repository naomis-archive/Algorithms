# get the sum of the two lowest values in an array of positive integers
def sum_two_smallest_numbers(numbers):
    return sorted(numbers)[0] + sorted(numbers)[1]
