import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

/**
 * @type {import("../types/store").Store.UserStore}
 */
const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        title: "",
        token: "",
        userId: "",

        /**
         *
         * @param {Domain.User} user
         * @returns
         */
        setUser: (user) => set(user),

        removeUser: () =>
          set({
            title: "",
            token: "",
            userId: "",
          }),
      }),
      {
        name: "user",
      }
    )
  )
);

export default useUserStore;
