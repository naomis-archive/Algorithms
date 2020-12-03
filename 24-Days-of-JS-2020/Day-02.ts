/**
 * You have deposited a specific amount of dollars into your bank account.
 * Each year your balance increases at the same growth rate. Find out
 * how long it would take for your balance to pass a specific threshold
 * with the assumption that you don't make any additional deposits.
 * @param deposit 
 * @param rate 
 * @param threshold 
 */
const depositProfit = (deposit: number, rate: number, threshold: number): number => {
    let balance = deposit, years = 0;
    for (let i = 0; balance < threshold; i++) {
        balance += balance * (rate/100);
        years++
    }
    return years;
};

/**
 * Test Cases
 */
console.log(depositProfit(100, 20, 170) === 3);
