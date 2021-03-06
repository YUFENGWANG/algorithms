/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 */

var getNumberIndex = function(i, numRows) {
  var base = numRows - 1 - i;
  return function(j) {
      return i + Math.ceil(j / 2) * 2 * base + Math.floor(j / 2) * 2 * i;
  };
};

/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  var length = s.length;
  if (length <= numRows) {
    return s;
  }
  var result = '';
  for (var i = 0; i < numRows; i += 1) {
    var getIndex = getNumberIndex(i, numRows);
    var j = 0;
    var step = i === 0 || i === numRows - 1 ? 2 : 1;
    var index = getIndex(j);
    while (index < length) {
      result += s[index];
      j += step;
      index = getIndex(j);
    }
  }
  return result;
};