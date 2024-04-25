import useUserStore from "../store/user.store";
import { Redirect } from "wouter";

/**
 *
 * @param {import("react").ComponentType} Component
 * @returns
 */
export default function withAuthenticatedUser(Component) {
	const Comp = () => {
		const token = useUserStore(state => state.jwt);

		if (token) return <Redirect to="/" replace />;

		return <Component />;
	};

	return Comp;
}
