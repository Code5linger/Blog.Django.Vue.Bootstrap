import React from "react"
import { navigate } from "gatsby"
import header from "../components/header"
import Header from "../components/header"

const Test = () => (
  <div>
    <Header title="Test" />
    <h1>Testing!</h1>
    <h1>Still Testing!</h1>
    <button onClick={() => navigate("/")}>Home</button>
  </div>
)

export default Test
