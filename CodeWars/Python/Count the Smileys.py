# count the number of valid faces in arr
import re


def count_smileys(arr):
    count = 0
    regex_test = "^[:;][)D]$|^[:;][-~][)D]$"
    for face in arr:
        if re.search(regex_test, face):
            count += 1
    return count
