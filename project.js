// 1. Deposit some money 
// 2. Determine amount of lines user wants to bet on 
// 3. Collect a bet amount from user
// 4. Spin the slot machine 
// 5. Check if the user won 
// 6. Give the user their winnings or take if they lose 
// 7. Play again

const prompt = require("prompt-sync")();









const deposit = () => {
    //loops until the user provides a number 
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid amount, try again")
        }
        else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to be on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again")
        }
        else {
            return numberOfLines;
        }
    }
}


const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per lines: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again")
        }
        else {
            return numberBet;
        }

    }
};


    let balance = deposit();
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);