import useUserStore from "../store/user.store";
import { Redirect } from "wouter";

/**
 *
 * @param {import("react").ComponentType} Component
 * @returns
 */
export default function withAuth(Component) {
	const Comp = () => {
		const token = useUserStore((state) => state.jwt);

		if (!token) return <Redirect to="/login" replace />;

		return <Component />;
	};

	return Comp;
}
