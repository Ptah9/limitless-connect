import express from "express"
import path from "path"
import { fileURLToPath } from "url"

// это нужно, чтобы получить __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000


// отдаём статические файлы из public
app.use(express.static(path.join(__dirname, "../web-app")))

// простой API
app.get("/hello", (req, res) => {
  res.json({ message: "Hello" })
})

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`)
})
