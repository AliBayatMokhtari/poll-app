import storageKeys from "../../constants/storageKeys";
import { getItem } from "./getItem";

const storage = window.localStorage;

/**
 *
 * @param {string} key
 * @param {Core.Storage.GetString} getter
 */
function getString(key, getter = (key) => getItem(storage, key)) {
	return getter(key);
}

/**
 *
 * @type {Core.Storage.StorageService['getAuthUser']}
 */
function getAuthUser(key = storageKeys.user, getter = () => getItem(storage, key)) {
	const user = getter(key);

	if (!user) return null;

	return JSON.parse(user).state;
}

const localStorageService = Object.freeze({
	getString,
	getAuthUser,
});

export default localStorageService;
