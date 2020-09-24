const genPrimes = (num) => {
    //empty array
    const primeArr = [];

    //fill array with numbers up to `num`
    let val = 1;
    while (val <= num) {
        primeArr.push(val);
        val++
    }
    //first prime number is 2
    val = 2;
    //do this until we reach the end?
    while (val <= Math.ceil(Math.sqrt(num))) {
        //start at the second factor, not the first
        for (let i = val * 2; i <= primeArr.length; i += val) {
            //good ol' zero indexing
            primeArr[i - 1] = false;
        }
        //increment
        val++
        //skip factors we've already filtered out
        while (!primeArr[val - 1] && val <= num) val++
    }
    return primeArr
}

console.log(genPrimes(100))