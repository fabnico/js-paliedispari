var check = document.getElementById('checkHTML');
var userWord = prompt("Inserisci una parola");
var checkWord = ""

function isPalindrome(){
   var palindrome = false;
   for (var i = userWord.length - 1; i >= 0; i--){
      checkWord += userWord[i];
   }
   if (checkWord == userWord){
      palindrome = true;
   }
   return palindrome;
}

if(isPalindrome(userWord)){
   console.log('La parola è palindroma');
} else {
   console.log('La parola non è palindroma');
}
