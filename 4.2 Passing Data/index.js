import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  let leng=(req.body["fName"].length) + (req.body["lName"].length);
  console.log("No of Chars: " + leng);
  res.render("index.ejs",{letters: leng});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
