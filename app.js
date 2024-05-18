const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middlewares/not-found");

// middlewares
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
app.use("/api/v1/tasks/:id", tasks);

app.use(notFound);

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
