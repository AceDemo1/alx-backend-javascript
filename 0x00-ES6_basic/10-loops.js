export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    const key = array.indexOf(value);
    array[key] = appendString + value;
  }

return array;
}
