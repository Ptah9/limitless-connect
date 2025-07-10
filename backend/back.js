import express from "express"
import cors from "cors"

const app = express()
const port = 3000

app.use(cors())

app.get("/hello", (req, res) => {
  res.json({ message: "Hello" })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
