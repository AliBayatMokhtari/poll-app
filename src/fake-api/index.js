import login from "./auth/login";
import signUp from "./auth/sign-up";

const fakeApi = Object.freeze({
	auth: {
		login,
		signUp,
	},
});
export default fakeApi;
