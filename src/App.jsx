import { Suspense, lazy } from "react";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Theme } from "@radix-ui/themes";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

import "./App.css";
import Header from "./components/header/Header";
import useThemeStore from "./store/theme.store";
import routes from "./constants/routes";

function App() {
	const theme = useThemeStore(state => state.theme);

	return (
		<Theme appearance={theme}>
			<Header />
			<Router hook={useHashLocation}>
				<Switch>
					<Route path={routes.home}>
						<Suspense fallback={<>Loading...</>}>
							<HomePage />
						</Suspense>
					</Route>
					<Route path={routes.login}>
						<Suspense fallback={<>Loading...</>}>
							<LoginPage />
						</Suspense>
					</Route>
					<Route path={routes.signUp}>
						<Suspense fallback={<>Loading...</>}>
							<SignUpPage />
						</Suspense>
					</Route>

					<Route>404</Route>
				</Switch>
			</Router>
		</Theme>
	);
}

export default App;
