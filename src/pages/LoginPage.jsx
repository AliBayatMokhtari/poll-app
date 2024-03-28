import useUserStore from "../store/user.store"
import { useLocation } from "wouter"
import {
  Button,
  Flex,
  TextField,
  Heading,
} from "@radix-ui/themes"
import authService from "../services/api/auth.service"

export default function LoginPage() {
  const setUser = useUserStore((state) => state.setUser)
  const [, setLocation] = useLocation()

  /**
   *
   * @param {{email: string; password: string;}} data
   */
  const loginUser = async ({ email, password }) => {
    const result = await authService.login({
      identifier: email,
      password,
    })

    setUser({ jwt: result.jwt, info: { ...result.user } })
    setLocation("/")
  }

  /**
   *
   * @param {import("react").FormEvent<HTMLFormElement>} e
   */
  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const email = formData.get("email")
    const password = formData.get("password")

    if (!email || !password) {
      // TODO
      return
    }

    loginUser({
      email: email.toString(),
      password: password.toString(),
    })
  }

  return (
    <Flex align="center" height="100vh">
      <form
        onSubmit={onSubmit}
        style={{
          maxWidth: "600px",
          width: "100%",
          marginInline: "auto",
        }}
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          gap="5"
          style={{ padding: "9rem" }}
        >
          <Heading as="h2" size="8">
            Login
          </Heading>

          <div style={{ width: "100%" }}>
            <label htmlFor="email">Email</label>
            <TextField.Root
              id="email"
              placeholder="Email"
              name="email"
              type="email"
              style={{ width: "100%", marginTop: "4px" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="password">Password</label>
            <TextField.Root
              id="password"
              placeholder="Password"
              name="password"
              type="password"
              style={{ width: "100%", marginTop: "4px" }}
              autoComplete="off"
            />
          </div>

          <Button
            type="submit"
            style={{ width: "100%", marginTop: "10px" }}
          >
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}
