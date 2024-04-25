import fakeApi from "../../fake-api";
import httpService from "../core/http.service";

/**
 * @type {Api.Auth.LoginService}
 */
function login(payload) {
	// const loginPromise = httpService.post("/auth/local", {
	// 	...payload,
	// });

	const loginPromise = fakeApi.auth.login({ ...payload });

	return loginPromise;
}

/**
 *
 * @type {Api.Auth.SignUpService}
 */
function signUp(payload) {
	const signUpPromise = httpService.post("/auth/local/register", { ...payload });

	return signUpPromise;
}

const authService = Object.freeze({
	login,
	signUp,
});
export default authService;
