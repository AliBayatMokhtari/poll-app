declare namespace Api {
  declare module Auth {
    interface LoginResponse {
      jwt: string
      user: Domain.UserInfo
    }

    interface LoginRequestBody {
      identifier: string
      password: string
    }

    type LoginService = (
      payload: LoginRequestBody
    ) => Promise<LoginResponse>
  }
}
