# return array of divisors of integer, or return string if prime
def divisors(integer):
    result = []
    for i in range(2, integer):
        if integer % i == 0:
            result.append(i)
    if len(result) == 0:
        return "%s is prime" % integer
    return result
