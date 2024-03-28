import withAuth from "../components/withAuth"
import useUserStore from "../store/user.store"
import { Heading } from "@radix-ui/themes"

function HomePage() {
  const removeUser = useUserStore(
    (state) => state.removeUser
  )

  return (
    <div>
      <Heading as="h2">Home Page</Heading>
      <button type="button" onClick={removeUser}>
        Logout
      </button>
    </div>
  )
}

const ProtectedHomePage = withAuth(HomePage)
export default ProtectedHomePage
