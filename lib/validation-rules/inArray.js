/**
 * Test if a value is present in an array.
 *
 * Bound attributes:
 *   Array source = Array of values to test against
 *
 * If the value itself is an array, all values within that array must be present
 * in the `source` array in order to pass validation.
 *
 * @param  {mixed} value Value to find
 * @return {Promise} Promise
 */
function inArray(value) {
  let valid = false;
  const source = this.source || [];
  const errorMsg = this.errorMsg || {
    inline: 'validation:rule.inArray.inline',
    summary: 'validation:rule.inArray.summary'
  };

  if (value !== null && typeof value !== 'undefined') {
    const search = Array.isArray(value) ? value : [ value ];
    for (let i = 0, l = search.length; i < l; i += 1) {
      if (source.indexOf(search[i]) > -1) {
        valid = true;
      } else {
        valid = false;
        break;
      }
    }
  }

  return valid ? Promise.resolve() : Promise.reject(errorMsg);
}

module.exports = inArray;
