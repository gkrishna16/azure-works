import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = process.env.PORT || 5006;

app.get("/", async function (req: Request, res: Response) {
  res.json({ msg: "Docker is easy." });
});

app.listen(port, function () {
  console.log(`Server running on ${port}`);
});
