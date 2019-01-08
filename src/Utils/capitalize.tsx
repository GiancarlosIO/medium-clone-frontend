/**
 * Capitalize a string
 *
 * @param {string} str The string to capitalize
 * @returns {string} The string capitalized
 */
function capitalize(str: string): string {
  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export default capitalize;
