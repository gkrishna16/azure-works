import express from "express";
const app = express();
const port = process.env.PORT || 5006;

app.get("/", async function (req, res) {
  res.json({ msg: "Docker is easy." });
});

app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
