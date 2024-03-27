import type { StoreApi, UseBoundStore } from "zustand";

declare namespace Store {
  interface UserStoreAction {
    setUser: (user: Domain.User) => void;
    removeUser: VoidFunction;
  }

  interface UserStore
    extends UseBoundStore<
      StoreApi<Domain.User & UserStoreAction>
    > {}
}
