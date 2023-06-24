const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(PORT, () => {
  console.log("server started");
});
