# Filter list of names for only 4 letter values
def friend(x):
    newArr = []
    for name in x:
        if len(name) == 4:
            newArr.append(name)
    return newArr
