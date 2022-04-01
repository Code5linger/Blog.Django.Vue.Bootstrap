import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Header title="Home" />
    <div>
      <h1>First Gatsby project</h1>
      <Link to="http://localhost:8000/test">Navigate to Test</Link>
      <br />
      <a href="https://www.google.com/">Google</a>
      <br />
      <button onClick={() => console.log("Home")}>Home</button>
    </div>

    <img
      src="https://c.tenor.com/K3FR6N_5QjAAAAAM/drama-2013.gif"
      width="25%"
      alt=""
    />
  </div>
)
