/* 1. Deposite some money
2. Determine number of lines to bet on
3. collect bet amount
4. Spin
5. Check if user won?
6. give the user their winnings
7. play again
*/

// function deposit(){
//     return 1
// }

const prompt = require("prompt-sync")();
  
    const deposit = () =>{
        while(true){
            const depositAmount = prompt("Enter Deposite amount:  ");
            const numberDepositAmount = parseFloat(depositAmount);

            if(isNaN(numberDepositAmount)|| numberDepositAmount<=0){
                console.log("Invalid deposite amount, try again");
            }
            else{
                return numberDepositAmount;
            }
        }
};

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOflines = parseFloat(lines);

        if(isNaN(numberOflines)||numberOflines<=0||numberOflines>3){
            console.log("Invalid number of lines, try again");
        }else{
            return numberOflines;
        }
    }
};

const getBet = (balance)=>{
    while(true){
        const bet = prompt("Enter the number of lines to bet on (1-3): ");
        const numberBet = parseFloat(lines);

        if(isNaN(numberBet)||numberBet<=0||numberBet>balance){
            console.log("Invalid bet, try again");
        }else{
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOflines = getNumberOfLines();
const bet = getBet(balance);
