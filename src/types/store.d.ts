import type { StoreApi, UseBoundStore } from "zustand";

declare namespace Store {
	interface UserStoreAction {
		setUser: (user: Domain.User) => void;
		removeUser: VoidFunction;
	}

	interface UserStore extends UseBoundStore<StoreApi<Domain.User & UserStoreAction>> {}

	type Theme = "dark" | "light";

	interface ThemeAction {
		setTheme: (theme: Theme) => void;
	}

	interface ThemeStore
		extends UseBoundStore<
			StoreApi<
				{
					theme: Theme;
				} & ThemeAction
			>
		> {}
}
