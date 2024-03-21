const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Shopping" });
});

app.listen(8003, () => {
  console.log("Shopping listening on 8003");
});
