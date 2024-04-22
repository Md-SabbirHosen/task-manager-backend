const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the home page!");
});

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// app.listen(5000, () => {
//   console.log("server is listening on port 5000!");
// });
