import { Suspense, lazy } from "react"
import { Router, Route } from "wouter"
import { useHashLocation } from "wouter/use-hash-location"
import { Theme } from "@radix-ui/themes"

const LoginPage = lazy(() => import("./pages/LoginPage"))
const HomePage = lazy(() => import("./pages/HomePage"))

import "./App.css"

function App() {
  return (
    <Theme appearance="dark">
      <Router hook={useHashLocation}>
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
    </Theme>
  )
}

export default App
