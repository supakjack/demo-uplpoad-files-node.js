const express = require("express");
const app = express();
const cors = require("cors");
const fileupload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);

app.get("/", (req, res, next) => {
  res.sendFile("upload.html", { root: __dirname });
});

app.post("/upload", (req, res, next) => {
  console.log(req.files);
  res.send(req.files);
});

app.listen(3000, () => console.log("app running on http://localhost:3000"));
