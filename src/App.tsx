import React, { useState } from "react"
import Sketch from "react-p5"
import p5 from "p5"
import "./App.css"

function App() {
  const [position, setPosition] = useState(250)

  const setup = (p5: p5, parent: Element): void => {
    p5.createCanvas(500, 500).parent(parent)
    p5.strokeWeight(5)
  }

  const draw = (p: p5): void => {
    p.clear()
    p.point(position, 250)
  }

  return (
    <div className="App">
      {/* @ts-ignore */}
      <Sketch setup={setup} draw={draw} />
    </div>
  )
}

export default App
