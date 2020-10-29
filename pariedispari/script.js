var whoWin = document.getElementById('myId');

var userMorra = prompt("pari o dispari?");
console.log('scelta : ', userMorra)
var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log('userNumber: ', userNumber)

function aiNumber(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

var add = aiNumber(1,5)
console.log(add)

var somma = userNumber + add
console.log(somma)


function evenOdd(number){
   var result;
   if(number % 2 === 0){
      result = "pari";
   } else{
      result = "dispari";
   }
   console.log(result)
   return result;
}

if (evenOdd(somma) == userMorra){
   whoWin.innerHTML = "Hai vinto!"
}else {
   whoWin.innerHTML = "Ha vinto il computer"
}
