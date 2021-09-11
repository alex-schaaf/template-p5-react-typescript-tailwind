import p5 from "p5"

export const sketch = (p: p5) => {
  p.setup = () => {
    const canvas = p.createCanvas(200, 200)
    canvas.parent()
    p.strokeWeight(5)
    p.stroke(255, 0, 0)
    p.point(100, 100)
  }

  p.draw = () => {}
}
