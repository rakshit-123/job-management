const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(`database  error is ${err}`);
  });

const app = express();
app.use(cors({
     origin:process.env.FRONTEND_URL
}));
app.use(express.json());

app.use("/api/jobs", require("./routes/jobsRoutes"));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
