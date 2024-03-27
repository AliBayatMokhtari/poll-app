/**
 * @param {Storage} storage
 * @param {string} key
 */
export function getItem(storage, key) {
  const value = storage.getItem(key);
  return value;
}
