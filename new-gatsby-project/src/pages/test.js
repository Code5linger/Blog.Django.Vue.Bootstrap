import React from "react"
import { navigate } from "gatsby"

const Test = () => (
  <div>
    <h1>Testing!</h1>
    <h1>Still Testing!</h1>
    <button onClick={() => navigate("/")}>Home</button>
  </div>
)

export default Test
