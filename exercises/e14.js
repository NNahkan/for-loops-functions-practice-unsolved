// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const wrongAccounts = [];
  for (const elm of array) {
    let sumOfWithdraw = 0;
    let depositsTotal = 0;
    const { withdrawals, deposits, balance } = elm;
    if (deposits) {
      for (const deposit of deposits) {
        depositsTotal += deposit;
      }
    }
    if (withdrawals) {
      for (const withdrawal of withdrawals) {
        sumOfWithdraw += withdrawal;
      }
    }
    if (depositsTotal - sumOfWithdraw !== balance) {
      wrongAccounts.push(elm);
    }
  }

  return wrongAccounts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
