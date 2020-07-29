# get the domain name from a given url
def domain_name(url):
    array = url.split("/")
    domain = array[0].split(".")
    if array[0] == "http:" or array[0] == "https:":
        domain = array[2].split(".")
    if domain[0] == "www":
        return domain[1]
    return domain[0]
