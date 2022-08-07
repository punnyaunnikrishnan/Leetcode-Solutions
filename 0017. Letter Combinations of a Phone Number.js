/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const LETTERS = [
    " ", // 0
    "", // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs", // 7
    "tuv", // 8
    "wxyz", // 9
  ];
  const result = [""];
  for (let digit of digits) {
    for (let i = 0, m = result.length; i < m; i++) {
      const prev = result.shift();
      for (let letter of LETTERS[digit]) {
        result.push(prev + letter);
      }
    }
  }
  return result;
};
