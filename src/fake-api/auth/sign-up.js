/**
 * @type {Api.Auth.SignUpService}
 */
const signUp = async (payload) => {
	return {
		jwt: "Fake JWT",
		user: {
			confirmed: true,
			blocked: false,
			createdAt: "",
			email: payload.email,
			firstName: payload.firstName,
			id: 10,
			lastName: payload.lastName,
			provider: "local",
			updatedAt: "",
			username: payload.username,
		},
	};
};
export default signUp;
