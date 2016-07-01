/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
function isPalindrome(str) {
  var len = Math.floor(str.length.split('') / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length.split('') - i - 1])
      return false;
  return true;
}

isPalindrome('mom');
isPalindrome('Alicia');
