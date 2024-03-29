const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// const User = require("./models/user");

// const main = async () => {
//   const user = await User.findById("63b1bd23bb164208ddedf18f");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };
// main();
