#flower game! Return the word the girl would say after counting the petals on the flower
def how_much_i_love_you(nb_petals):
    words = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    return words[(nb_petals - 1) % 6]