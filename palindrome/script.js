var check = document.getElementById('checkHTML')
var userWord = prompt("Inserisci una parola")

function isPalindrome(word){
   var isPal = false
   var reverseWord = ""
   for (var i = word.length - 1; i >= 0; i--){
      reverseWord += word[i]
   }
   if (word == reverseWord){
      isPal = true
   }
   return isPal
}

if(isPalindrome(userWord)){
   console.log('La parola è palindroma');
   check.innerHTML = "La parola è palindroma"
}

if(!isPalindrome(userWord)){
   console.log('La parola non è palindroma');
   check.innerHTML = "La parola non è palindroma"
}
