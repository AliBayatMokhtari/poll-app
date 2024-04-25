import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import storageKeys from "../constants/storageKeys";

/** @type {import("../types/store").Store.Theme} */
const defaultTheme = "dark";

/**
 * @type {import("../types/store").Store.ThemeStore}
 */
const useThemeStore = create(
	devtools(
		persist(
			set => ({
				theme: defaultTheme,
				setTheme: theme => set({ theme }),
			}),
			{
				name: storageKeys.theme,
			},
		),
	),
);

export default useThemeStore;
