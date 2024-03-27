import { getItem } from "./getItem";

const storage = window.localStorage;

/**
 *
 * @param {string} key
 * @param {Core.Storage.GetString} getter
 */
function getString(
  key,
  getter = (key) => getItem(storage, key)
) {
  return getter(key);
}

const localStorageService = Object.freeze({
  getString,
});

export default localStorageService;
