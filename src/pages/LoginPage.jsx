import useUserStore from "../store/user.store"
import { useLocation } from "wouter"

export default function LoginPage() {
  const setUser = useUserStore((state) => state.setUser)
  const [, setLocation] = useLocation()

  const loginUser = () => {
    setUser({
      title: "Ali BM",
      token: import.meta.env.VITE_TOKEN,
      userId: "ali_bm",
    })

    setLocation("/")
  }

  return (
    <div>
      <h2>Login Page</h2>

      <button type="button" onClick={loginUser}>
        Login
      </button>
    </div>
  )
}
