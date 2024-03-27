import withAuth from "../components/withAuth"
import useUserStore from "../store/user.store"

function HomePage() {
  const removeUser = useUserStore(
    (state) => state.removeUser
  )

  return (
    <div>
      <h2>Home Page</h2>
      <button type="button" onClick={removeUser}>
        Logout
      </button>
    </div>
  )
}

const ProtectedHomePage = withAuth(HomePage)
export default ProtectedHomePage
