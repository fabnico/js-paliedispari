var whoWin = document.getElementById('myId');

var userMorra = prompt("pari o dispari?");
console.log('scelta : ', userMorra)
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log('userNumber: ', userNumber)

function aiNumber(){
   var number = Math.floor(Math.random() * 5 ) + 1;
   console.log('aiNumber ', number)
   return number;
}

var sum = userNumber + aiNumber();
console.log('somma ',sum)

function evenOdd(){
   var result;
   if(sum % 2 === 0){
      result = "pari";
   } else{
      result = "dispari";
   }
   console.log(result)
   return result;
}

if (evenOdd() == userMorra){
   whoWin.innerHTML = "Hai vinto!"
}else {
   whoWin.innerHTML = "Ha vinto il computer"
}
