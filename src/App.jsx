import { Suspense, lazy } from "react"
import { Router, Route } from "wouter"
import { useHashLocation } from "wouter/use-hash-location"
import { Theme } from "@radix-ui/themes"

const LoginPage = lazy(() => import("./pages/LoginPage"))
const HomePage = lazy(() => import("./pages/HomePage"))

import "./App.css"
import Header from "./components/header/Header"
import useThemeStore from "./store/theme.store"

function App() {
  const theme = useThemeStore((state) => state.theme)

  return (
    <Theme appearance={theme}>
      <Header />
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
