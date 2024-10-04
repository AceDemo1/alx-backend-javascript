/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const [i, item] of array.entries()) {
    array[i] = appendString + item;
  }

  return array;
}
