import httpService from "../core/http.service"

/**
 * @type {Api.Auth.LoginService}
 */
function login(payload) {
  const loginPromise = httpService.post("/auth/local", {
    ...payload,
  })

  return loginPromise
}

const authService = Object.freeze({
  login,
})
export default authService
