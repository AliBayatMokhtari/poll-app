import login from "./auth/login";
import signUp from "./auth/sign-up";
import getAll from "./polls/polls-list";

const api = {
	auth: {
		login,
		signUp,
	},
	poll: {
		getAll,
	},
};

const fakeApi = Object.freeze({ ...api });
export default fakeApi;
