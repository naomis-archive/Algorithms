# replace each letter with its numeric value. Ignore spaces and punctuation.
def alphabet_position(text):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    alphalist = []
    numberlist = []
    for letter in alpha:
        alphalist.append(letter)
    for word in text:
        for letter in word:
            if letter.lower() in alphalist:
                numberlist.append(str(alphalist.index(letter.lower()) + 1))
    return " ".join(numberlist)
