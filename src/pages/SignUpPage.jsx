import { Flex, Heading, TextField, Button, Text } from "@radix-ui/themes";
import { Link } from "wouter";
import routes from "../constants/routes";
import authService from "../services/api/auth.service";
import useUserStore from "../store/user.store";
import withAuthenticatedUser from "../components/withAuthenticatedUser";

function SignUpPage() {
	const setUser = useUserStore((store) => store.setUser);

	/**
	 *
	 * @param {import("react").FormEvent<HTMLFormElement>} e
	 */
	const submit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const email = formData.get("email");
		const username = formData.get("username");
		const firstName = formData.get("firstName");
		const lastName = formData.get("lastName");
		const password = formData.get("password");
		const confirmPassword = formData.get("confirmPassword");

		if (password !== confirmPassword) {
			// TODO
			return;
		}

		if (email && username && firstName && lastName && password) {
			const payload = {
				email: email.toString(),
				username: username.toString(),
				firstName: firstName.toString(),
				lastName: lastName.toString(),
				password: password.toString(),
			};

			authService.signUp(payload).then((res) => {
				const { user, jwt } = res;
				setUser({
					info: user,
					jwt,
				});
			});
		}
	};

	return (
		<Flex align="center">
			<form
				onSubmit={submit}
				style={{
					maxWidth: "600px",
					width: "100%",
					marginInline: "auto",
				}}
			>
				<Flex justify="center" align="center" direction="column" gap="5" style={{ padding: "9rem" }}>
					<Heading as="h2" size="8">
						Sign Up
					</Heading>

					<div style={{ width: "100%" }}>
						<label htmlFor="email">Email</label>
						<TextField.Root
							id="email"
							placeholder="Email"
							name="email"
							type="email"
							style={{ width: "100%", marginTop: "4px" }}
							required
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label htmlFor="username">Username</label>
						<TextField.Root
							id="username"
							placeholder="Username"
							name="username"
							type="text"
							style={{ width: "100%", marginTop: "4px" }}
							required
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label htmlFor="firstName">First Name</label>
						<TextField.Root
							id="firstName"
							placeholder="First Name"
							name="firstName"
							type="text"
							style={{ width: "100%", marginTop: "4px" }}
							required
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label htmlFor="lastName">Last Name</label>
						<TextField.Root
							id="lastName"
							placeholder="Last Name"
							name="lastName"
							type="text"
							style={{ width: "100%", marginTop: "4px" }}
							required
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label htmlFor="password">Password</label>
						<TextField.Root
							id="password"
							placeholder="Password"
							name="password"
							type="password"
							style={{ width: "100%", marginTop: "4px" }}
							autoComplete="off"
							required
						/>
					</div>
					<div style={{ width: "100%" }}>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<TextField.Root
							id="confirmPassword"
							placeholder="Confirm Password"
							name="confirmPassword"
							type="password"
							style={{ width: "100%", marginTop: "4px" }}
							autoComplete="off"
							required
						/>
					</div>

					<Button type="submit" style={{ width: "100%", marginTop: "10px" }}>
						Register
					</Button>

					<Flex width="100%">
						<Text size="1">
							{`Already have an account?`}{" "}
							<Link to={routes.login} style={{ textDecoration: "none" }}>
								<Text color="blue">Login</Text>
							</Link>
						</Text>
					</Flex>
				</Flex>
			</form>
		</Flex>
	);
}

const AuthenticatedUserSignUpPage = withAuthenticatedUser(SignUpPage);

export default AuthenticatedUserSignUpPage;
