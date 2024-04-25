import delay from "../utils/delay";

/**
 *
 * @type {Api.Auth.LoginService}
 */
const login = async (payload) => {
	await delay();
	return {
		jwt: "Fake JWT",
		user: {
			confirmed: true,
			blocked: false,
			createdAt: "",
			email: payload.identifier,
			firstName: "Ali",
			id: 10,
			lastName: "Bayat Mokhtari",
			provider: "local",
			updatedAt: "",
			username: "ali_bm",
		},
	};
};
export default login;
