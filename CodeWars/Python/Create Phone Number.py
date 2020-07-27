# make a phone number from array of 10 digits
def create_phone_number(n):
    area_code = str(n[0]) + str(n[1]) + str(n[2])
    prefix = str(n[3]) + str(n[4]) + str(n[5])
    line_number = str(n[6]) + str(n[7]) + str(n[8]) + str(n[9])
    return "(" + area_code + ") " + prefix + "-" + line_number
