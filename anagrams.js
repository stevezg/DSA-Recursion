function anagrams (word) {

  let results = {};

  let combos = function (buildCombo, feed) {
    if (!feed.length) {
      results[buildCombo] = '';
      return;
    }
    for (let i = 0; i < feed.length; i++) {
      combos(buildCombo + feed.charAt(i), feed.slice(0, i) + feed.slice(i + 1));
    }
  };

  combos('', word);
  return Object.keys(results);

}

console.log(anagrams('steve'));
