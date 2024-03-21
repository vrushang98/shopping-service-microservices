const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Products" });
});

app.listen(8002, () => {
  console.log("Products listening on 8002");
});
