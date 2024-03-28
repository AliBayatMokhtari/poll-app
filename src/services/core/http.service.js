import config from "../../constants/config"
import localStorageService from "./localStorage.service"

/**
 *
 * @param {{storageService: Core.Storage.StorageService}} services
 * @returns {Core.Http.HttpCore}
 */
const createHttpCore = ({ storageService }) => {
  const user = storageService.getAuthUser()
  const token = user?.jwt ?? ""

  /** @type {Record<string, string>} */
  const defaultRequestHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  }

  /**
   *
   * @param {string} url
   */
  const getFullUrl = (url) => config.apiBaseUrl + url

  return {
    async get(url) {
      const res = await fetch(getFullUrl(url), {
        method: "GET",
        headers: {
          ...defaultRequestHeaders,
        },
      })

      const json = await res.json()

      if (!res.ok) {
        throw json
      }

      return json
    },

    async post(url, payload) {
      const res = await fetch(getFullUrl(url), {
        method: "POST",
        headers: { ...defaultRequestHeaders },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok) {
        throw json
      }

      return json
    },
  }
}

const httpService = Object.freeze({
  ...createHttpCore({
    storageService: localStorageService,
  }),
})
export default httpService
