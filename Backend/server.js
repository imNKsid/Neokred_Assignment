// /server.js
import express from "express";
import { json } from "body-parser";
import marked from "marked";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(json());
app.use(cors());

app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  const html = marked(markdown);
  res.send({ html });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
