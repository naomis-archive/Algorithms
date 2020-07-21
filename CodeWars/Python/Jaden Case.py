# title case a string
def to_jaden_case(string):
    array = string.split(" ")
    for i in range(len(array)):
        word = array[i]
        letters = list(word)
        letters[0] = letters[0].upper()
        array[i] = "".join(letters)
    s = " "
    return s.join(array)
