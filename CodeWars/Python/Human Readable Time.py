# take a value of seconds, turn it into HH:MM:SS string
import math
def make_readable(seconds):
    hours = math.floor(seconds/60/60)
    minutes = math.floor((seconds - hours*60*60)/60)
    seconds = seconds - (hours*60*60) - (minutes*60)
    return "{:02d}".format(hours) + ":" + "{:02d}".format(minutes) + ":" + "{:02d}".format(seconds)