const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

/* Closure: Es la combinación de una función y el ámbito léxico en la cual ha sido declarada dicha función. Un closure recuerda el ámbito en el cual ha sido creado.

El closure recuerda la asignación del valor anterior porque queda en la memoria, al pasarle un nuevo valor nos dará como resultado la suma de estos elementos porque estamos usando la asignación de adición. */

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4); 
myMoneyBox(6); 
myMoneyBox(10); 

// primer llamado de nuestra funcion que es un closure 4 
// segundo llamado recuerda la asignacion del valor anterior, ahora 10
// tercer llamado recuerda la asignacion de 10 ahora tiene 20