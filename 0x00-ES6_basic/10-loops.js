/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    const i = array.indexOf(item);
    array[i]: (appendString + item);
  }

  return array;
}
