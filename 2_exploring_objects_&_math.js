// Task 1: Create a Constructor Function for the Account Object

function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}


// Task 2: Implement Methods Within the Account Object to Deposit and Withdraw Funds

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful. New balance: $${this.balance.toFixed(2)}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

Account.prototype.withdraw = function(amount) {
    if (amount > 0) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful. New balance: $${this.balance.toFixed(2)}`);
        } else {
            console.log("Insufficient balance for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}


// Task 3: Create a Method to Calculate Compound Interest

Account.prototype.calculateCompoundInterest = function(rate, years) {
    const compoundInterest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
    console.log(`Compound interest after ${years} years at a rate of ${rate}%: $${compoundInterest.toFixed(2)}`);
    return compoundInterest;
}
