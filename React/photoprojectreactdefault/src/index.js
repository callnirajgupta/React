import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
 import {ThemeContextProvider,Context} from "./Context.js"

ReactDOM.render(<ThemeContextProvider><Router>
<App /></Router></ThemeContextProvider>, document.getElementById("root"))
