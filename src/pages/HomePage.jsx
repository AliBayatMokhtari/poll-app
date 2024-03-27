import withAuth from "../components/withAuth"

function HomePage() {
  return <div>Home Page</div>
}

const ProtectedHomePage = withAuth(HomePage)
export default ProtectedHomePage
