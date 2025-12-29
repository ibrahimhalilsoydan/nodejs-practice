import express from "express";
/* import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
}) */



const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello index sayfası");
});

app.get("/about", (req, res) => {
  res.status(200).send("Hello about  sayfası");
});

app.get("/contact", (req, res) => {
  res.status(200).send("Hello contact sayfası");
});

app.use((req, res) => {
  res.status(404).send('Sayfa bulunamadı');
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
