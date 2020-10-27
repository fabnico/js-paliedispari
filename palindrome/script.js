var check = document.getElementById('checkHTML');
var userWord = prompt("Inserisci una parola");

function isPalindrome(){
   var checkWord = ""
   var palindrome = false;
   for (var i = userWord.length - 1; i >= 0; i--){
      checkWord += userWord[i];
         console.log(checkWord)
   }
   if (checkWord == userWord){
      palindrome = true;
   }
   return palindrome;
}

if(isPalindrome(userWord)){
   check.innerHTML = "La parola è palindroma";
   console.log('La parola è palindroma');
}


if(!isPalindrome(userWord)){
   check.innerHTML = "La parola non è palindroma";
   console.log('La parola non è palindroma');


}
