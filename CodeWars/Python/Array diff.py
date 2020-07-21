def array_diff(a, b):
    array = []
    if b == []:
        return a
    for element in a:
        if element not in b:
            array.append(element)
    return array
