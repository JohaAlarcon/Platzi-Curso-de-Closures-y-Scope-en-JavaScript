// const moneyBox =(coins) => {
//     var saveConis = 0;
//     saveConis += coins;
//     console.log(`MoneyBox: $${saveCoins}  ` );
// }

// moneyBox (5);
// moneyBox (10);

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log (`MoneyBox: ${saveCoins}`)
    }
    return countCoins;
};

let myMoneyBox = moneyBox();
moneyBox (4);
moneyBox (6);