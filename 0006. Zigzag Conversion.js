/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) return s;

  const rows = Array(numRows).fill("");
  let pos = 0,
    direct = true;
  for (let i = 0, n = s.length; i < n; i++) {
    if (pos === 0) direct = true;
    if (pos === numRows - 1) direct = false;

    rows[pos] += s[i];
    pos += direct ? 1 : -1;
  }

  return rows.join("");
};
