declare namespace Core {
  declare module Storage {
    type GetString = (key: string) => string | null

    interface StorageService {
      getString: GetString
      getAuthUser: (
        key?: string,
        getter?: GetString
      ) => Domain.User | null
    }
  }

  declare module Http {
    type Get = <D>(url: string) => Promise<D>
    type Post = <D, P = any>(
      url: string,
      payload: P
    ) => Promise<D>

    interface HttpCore {
      get: Get
      post: Post
    }
  }
}
