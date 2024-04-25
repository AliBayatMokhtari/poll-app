import useUserStore from "../store/user.store";
import { Button, Flex, TextField, Heading, Text } from "@radix-ui/themes";
import authService from "../services/api/auth.service";
import withAuthenticatedUser from "../components/withAuthenticatedUser";
import { Link } from "wouter";
import routes from "../constants/routes";
import { useState } from "react";

function LoginPage() {
	const setUser = useUserStore((state) => state.setUser);
	const [loading, setLoading] = useState(false);

	/**
	 *
	 * @param {{email: string; password: string;}} data
	 */
	const loginUser = async ({ email, password }) => {
		setLoading(true);
		try {
			const result = await authService.login({
				identifier: email,
				password,
			});

			setUser({ jwt: result.jwt, info: { ...result.user } });
		} catch (err) {
			// TODO: handle error globally or locally
			console.log({ err });
		} finally {
			setLoading(false);
		}
	};

	/**
	 *
	 * @param {import("react").FormEvent<HTMLFormElement>} e
	 */
	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const email = formData.get("email");
		const password = formData.get("password");

		if (!email || !password) {
			// TODO
			return;
		}

		loginUser({
			email: email.toString(),
			password: password.toString(),
		});
	};

	return (
		<Flex align="center">
			<form
				onSubmit={onSubmit}
				style={{
					maxWidth: "600px",
					width: "100%",
					marginInline: "auto",
				}}
			>
				<Flex justify="center" align="center" direction="column" gap="5" style={{ padding: "9rem" }}>
					<Heading as="h2" size="8">
						Login
					</Heading>

					<div style={{ width: "100%" }}>
						<label htmlFor="email">Email</label>
						<TextField.Root
							id="email"
							placeholder="Email"
							name="email"
							type="email"
							style={{ width: "100%", marginTop: "4px" }}
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
						/>
					</div>

					<Button type="submit" style={{ width: "100%", marginTop: "10px" }} loading={loading}>
						Login
					</Button>

					<Flex width="100%">
						<Text size="1">
							{`Don't have any account?`}{" "}
							<Link to={routes.signUp} style={{ textDecoration: "none" }}>
								<Text color="blue">Register</Text>
							</Link>
						</Text>
					</Flex>
				</Flex>
			</form>
		</Flex>
	);
}

const AuthenticatedUserLoginPage = withAuthenticatedUser(LoginPage);
export default AuthenticatedUserLoginPage;
