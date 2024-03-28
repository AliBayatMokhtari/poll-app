declare namespace Domain {
  interface UserInfo {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
  }

  interface User {
    jwt: string
    info: UserInfo
  }
}
