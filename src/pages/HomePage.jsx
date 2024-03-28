import withAuth from "../components/withAuth"
import useUserStore from "../store/user.store"
import { Container, Heading } from "@radix-ui/themes"

function HomePage() {
  const removeUser = useUserStore(
    (state) => state.removeUser
  )

  return (
    <Container mt="5">
      <Heading as="h2">Home Page</Heading>
      <button type="button" onClick={removeUser}>
        Logout
      </button>
    </Container>
  )
}

const ProtectedHomePage = withAuth(HomePage)
export default ProtectedHomePage
