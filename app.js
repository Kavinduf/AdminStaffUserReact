import express from "express";
import cors from "cors";
import userRoutes from "./Routes/userRoute.js";
import connect from "./db/connect.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;

app.get("/api", (req, res) => {
  res.json({ message: "server is running on" });
});

app.use("/api/user", userRoutes);

const init = async () => {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.log(error);
  }
};

init();

//8N09Pc7HMGC5D5HQ
