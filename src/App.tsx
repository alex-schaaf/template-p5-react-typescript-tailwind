import React from "react"
import { useP5 } from "@gen/react-use-p5"

import "./App.css"
import { sketch } from "./sketch"

const SketchComponent = () => {
  const [setRef] = useP5(sketch)
  // Canvas will be rendered as child of div
  return <div ref={setRef} />
}

function App() {
  return (
    <div className="App">
      <SketchComponent />
    </div>
  )
}

export default App
