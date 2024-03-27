import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

// import radix ui styles
import "@radix-ui/themes/styles.css"

import "./index.css"

/**
 * @type {any}
 */
const rootElement = document.getElementById("root")

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
