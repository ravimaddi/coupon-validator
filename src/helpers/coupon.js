/**
 * @param {integer} length
 * @returns {string} str
 */
export const generateString = (length) => {
  let str = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i + 1) {
    str += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return str;
};
/**
 * @param {String} type
 * @returns {Function} calc
 */
export const typeChecker = {
  flatDiscountCalculator: (discount, price) => price - discount,
  percentDiscountCalculator: (percent, price) => price - (percent * price)
};