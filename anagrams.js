'use strict';
// east
function anagrams (word) {
  // get a letter from word and use as prefix
  const results = [];
  function anagramsHelper(prefix, word1) {
    // base case : word is 1 letter
    if(word1.length === 1){
      results.push(prefix + word1);
      return word1[0];
    }
    word1.split('').forEach((pre, index) => {
      let firstPartOfWord = word1.slice(0,index);
      let secondPartOfWord = word1.slice(index + 1);
      const result = anagramsHelper(prefix + pre, firstPartOfWord + secondPartOfWord);
      return result;
    });
  }
  anagramsHelper('', word);
  return results;
}

console.log(anagrams('easts').length);

