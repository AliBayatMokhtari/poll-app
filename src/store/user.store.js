import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

/** @type {Domain.User} */
const initialStore = {
  jwt: "",
  info: {
    id: -1,
    username: "",
    email: "",
    provider: "",
    confirmed: false,
    blocked: true,
    createdAt: "",
    updatedAt: "",
  },
}

/**
 * @type {import("../types/store").Store.UserStore}
 */
const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        ...initialStore,

        /**
         *
         * @param {Domain.User} user
         * @returns
         */
        setUser: (user) => set(user),

        removeUser: () => set({ ...initialStore }),
      }),
      {
        name: "user",
      }
    )
  )
)

export default useUserStore
