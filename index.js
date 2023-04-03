function isPalindrome(word) {
  // Write your algorithm here
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  if (reversed === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  1. Create a variable called `reversed` and assign an empty string to it
  2. Use a for loop to iterate through the characters in `word` backwards
  3. In each iteration, add the current character to the `reversed` variable
  4. Compare the reversed string to the original word
  5. If they are the same, return true. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  This function determines whether a given word is a palindrome by iterating through the characters in the word backwards and creating a new string with those characters. Then it compares the reversed string to the original word. If they are the same, the function returns true because the word is a palindrome. If they are not the same, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
