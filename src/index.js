import dotenv from "dotenv";
import express from "express";
import connectToDB from "./db/index.js";
import router from "./routes/route.js";

dotenv.config({ path: "./env" });

const app = express();
const port = process.env.PORT || 8000;

// Middleware for parsing JSON
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});
connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log("App is listening on port", port);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed ", err);
  });
 