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

    interface SignUpRequestBody {
      email: string
      username: string
      password: string
      firstName: string
      lastName: string
    }

    type LoginService = (
      payload: LoginRequestBody
    ) => Promise<LoginResponse>

    type SignUpService = (
      payload: SignUpRequestBody
    ) => Promise<LoginResponse>
  }
}
