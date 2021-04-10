/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = (str) => {
  let result = '';
  let counter = 0;
  let letter = str[0];

  if (!str.length) return result;

  str.split('').forEach((x) => {
    if (x === letter) {
      counter += 1;
      return;
    }

    const temp = counter !== 1 ? `${counter}${letter}` : letter;
    result = `${result}${temp}`;
    letter = x;
    counter = 1;
  });

  return counter !== 1 ? `${result}${counter}${letter}` : `${result}${letter}`;
};

module.exports = encodeLine;
