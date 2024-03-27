import { Suspense, lazy } from "react"
import { Link, Router, Route } from "wouter"
import { useHashLocation } from "wouter/use-hash-location"

const LoginPage = lazy(() => import("./pages/LoginPage"))
const HomePage = lazy(() => import("./pages/HomePage"))

import "./App.css"

function App() {
  return (
    <>
      <Router hook={useHashLocation}>
        <Link to="/login">Login</Link>

        <Route path="/">
          <Suspense fallback={<>Loading...</>}>
            <HomePage />
          </Suspense>
        </Route>
        <Route path="/login">
          <Suspense fallback={<>Loading...</>}>
            <LoginPage />
          </Suspense>
        </Route>
      </Router>
    </>
  )
}

export default App
