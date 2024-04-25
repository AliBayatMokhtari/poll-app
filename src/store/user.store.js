import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import storageKeys from "../constants/storageKeys";

/** @type {Domain.User} */
const initialStore = {
	jwt: "",
	info: {
		id: -1,
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		provider: "",
		confirmed: false,
		blocked: true,
		createdAt: "",
		updatedAt: "",
	},
};

/**
 * @type {import("../types/store").Store.UserStore}
 */
const useUserStore = create(
	devtools(
		persist(
			set => ({
				...initialStore,

				/**
				 *
				 * @param {Domain.User} user
				 * @returns
				 */
				setUser: user => set(user),

				removeUser: () => set({ ...initialStore }),
			}),
			{
				name: storageKeys.user,
			},
		),
	),
);

export default useUserStore;
